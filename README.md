<p align="center">
<!-- START banner -->
<img alt="Kevin Wolf formal" src="./other/banner.png" width="276" height="161" />
<!-- END banner -->
</p>

<p align="center">
<!-- START social-badges -->
<a href="https://github.com/kevinwolfcr/formal/watchers"><img src="https://img.shields.io/github/watchers/kevinwolfcr/formal.svg?style=social" alt="Watch on GitHub" /></a>
<a href="https://github.com/kevinwolfcr/formal/stargazers"><img src="https://img.shields.io/github/stars/kevinwolfcr/formal.svg?style=social" alt="Star on GitHub" /></a>
<a href="https://twitter.com/intent/tweet?text=Check out formal, an elegant cross-platform form management primitives for the react hooks era. https://github.com/kevinwolfcr/formal"><img src="https://img.shields.io/twitter/url/https/github.com/kevinwolfcr/formal.svg?style=social" alt="Tweet!" /></a>
<!-- END social-badges -->
</p>

<p align="center">
<!-- START description -->
Elegant cross-platform form management primitives<br />for the react hooks era.
<!-- END description -->
</p>

<p align="center">
<!-- START status-badges -->
<a href="http://makeapullrequest.com"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs Welcome" /></a>
<a href="https://travis-ci.org/kevinwolfcr/formal"><img src="https://img.shields.io/travis/kevinwolfcr/formal.svg?style=flat-square" alt="Build Status" /></a>
<a href="https://codecov.io/github/kevinwolfcr/formal"><img src="https://img.shields.io/codecov/c/github/kevinwolfcr/formal.svg?style=flat-square" alt="Code Coverage" /></a>
<a href="https://greenkeeper.io"><img src="https://badges.greenkeeper.io/kevinwolfcr/formal.svg?style=flat-square" alt="Greenkeeper" /></a>
<!-- END status-badges -->
</p>

<p align="center">
<!-- START npm-badges -->
<a href="https://npmjs.com/package/@kevinwolf/formal"><img src="https://img.shields.io/npm/v/@kevinwolf/formal.svg?label=npm&style=flat-square" alt="@kevinwolf/formal"></a>
<a href="https://npmjs.com/package/@kevinwolf/formal"><img src="https://img.shields.io/npm/dm/@kevinwolf/formal.svg?label=downloads&style=flat-square" alt="@kevinwolf/formal"></a>
<!-- END npm-badges -->
</p>

## Problem

<!-- START the-problem -->

Working with forms on react can be a really repetitive task. Most of the existing abstractions provides a render props API and it is just not cool on the _react hooks era_.

Also, some of those packages does not provide out of the box support for both web and mobile platforms.

<!-- END the-problem -->

## Solution

<!-- START the-solution -->

**Formal** is a _cross-platform_ solution that exposes just the right primitives you need to manage your forms state and validations with ease.

<!-- END the-solution -->

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Installation](#installation)
- [Usage](#usage)
  - [React Web](#react-web)
  - [React Native](#react-native)
- [API Reference](#api-reference)
  - [useFormal](#useformal)
    - [FormalValues](#formalvalues)
    - [FormalConfig](#formalconfig)
      - [schema](#schema)
      - [onSubmit](#onsubmit)
    - [FormalState](#formalstate)
      - [isValid](#isvalid)
      - [isDirty](#isdirty)
      - [isSubmitting](#issubmitting)
      - [isSubmitted](#issubmitted)
      - [values](#values)
      - [errors](#errors)
      - [handleChange](#handlechange)
      - [handleReset](#handlereset)
      - [handleSubmit](#handlesubmit)
      - [getFormProps](#getformprops)
      - [getFieldProps](#getfieldprops)
      - [getResetButtonProps](#getresetbuttonprops)
      - [getSubmitButtonProps](#getsubmitbuttonprops)
- [Contributing](#contributing)
  - [Installing the project](#installing-the-project)
  - [Running the development environment](#running-the-development-environment)
  - [Running the tests](#running-the-tests)
  - [Validating the changes](#validating-the-changes)
- [Other solutions](#other-solutions)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

<!-- START installation -->

Add this package to your application `dependencies` with yarn:

```sh
yarn add @kevinwolf/formal
# npm install --save @kevinwolf/formal
```

<!-- END installation -->

## Usage

<!-- START usage -->

This package exports by default the `useFormal` hook, so you only need to import it and hook it up with your initial state and an options.

### React Web

```jsx
import React from "react";
import useFormal from "@kevinwolf/formal";

const initialValues = {
  firstName: "Tony",
  lastName: "Stark",
  email: "ironman@avengers.io"
};

function App() {
  const formal = useFormal(initialValues, {
    onSubmit: values => console.log("Your values are:", values)
  });

  return (
    <form onSubmit={formal.handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input {...formal.getFieldProps("firstName")} type="text" />
      </div>

      <div>
        <label htmlFor="lastName">Last Name</label>
        <input {...formal.getFieldProps("lastName")} type="text" />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input {...formal.getFieldProps("email")} type="text" />
      </div>

      <button type="submit">Subnit</button>
    </form>
  );
}
```

### React Native

```jsx
import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import useFormal from "@kevinwolf/formal";

const initialValues = {
  firstName: "Tony",
  lastName: "Stark",
  email: "ironman@avengers.io"
};

function App() {
  const formal = useFormal(initialValues, {
    onSubmit: values => console.log("Your values are:", values)
  });

  return (
    <View>
      <View>
        <Text>First Name</Text>
        <TextInput {...formal.getFieldProps("firstName")} />
      </View>

      <View>
        <Text>Last Name</Text>
        <TextInput {...formal.getFieldProps("lastName")} />
      </View>

      <View>
        <Text>Email</Text>
        <TextInput {...formal.getFieldProps("email")} />
      </View>

      <Button title="Submit" onPress={formal.handleSubmit} />
    </View>
  );
}
```

<!-- END usage -->

## API Reference

<!-- START api -->

### useFormal

Main useFormal hook. Use it on your functional components to get the primitives to easily work with forms.

```typescript
export default function useFormal<FormalValues>(
  initialValues: FormalValues,
  config: FormalConfig<Values>
): FormalState<Values>;
```

#### FormalValues

The form initial values. It can be a hardcoded object or an object gotten from an API endpoint.

```typescript
type InitialValues = {
  [field: string]: any;
};
```

Example:

```typescript
const initialValues = {
  firstName: "Tony",
  lastName: "Stark",
  email: "ironman@avengers.io"
};
```

#### FormalConfig

The hook configuration object.

```typescript
import { Schema } from "yup";

interface FormalConfig<FormalValues> {
  schema?: Schema<FormalValues>;
  onSubmit: (
    values: FormalValues,
    formal: FormalState<Values>
  ) => void | Promise<any>;
}
```

##### schema

A [yup](https://github.com/jquense/yup) schema definition. It will be called before submitting the form.

##### onSubmit

The function that will be called if your form is correctly validated, passing the actual values as the first argument and the FormalState as the second argument. If it is an asynchronous function, then `formal.isLoading` will be true until the promise is resolved or rejected.

Example:

```typescript
import * as yup from "yup";

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup
    .string()
    .email()
    .required()
});

async function onSubmit(values, formal) {
  try {
    await someAsyncTask(values);
  } catch (errors) {
    const formattedErrors = transformErrorsForFormal(errors);
    formal.setErrors(formattedErrors);
  }
}

const formalConfig = {
  schema,
  onSubmit
};
```

#### FormalState

This is the state, callbacks, flags and _prop getters_ returned by **useFormal()** hook.

```typescript
interface FormalState<Values> {
  // Flags
  isValid: boolean;
  isDirty: boolean;
  isSubmitting: boolean;
  isSubmitted: boolean;

  // State
  values: Values;
  errors: null | FormalErrors<Values>;

  // Callbacks
  handleChange: (field: keyof Values, value: any) => void;
  handleReset: () => void;
  handleSubmit: () => void;
  setErrors: (errors: FormalErrors<Values>) => void;

  // Prop getters
  getFormProps: () => FormalFormProps;
  getFieldProps: (field: keyof Values) => FormalFieldProps;
  getResetButtonProps: () => FormalResetButtonProps;
  getSubmitButtonProps: () => FormalSubmitButtonProps;
}
```

##### isValid

A boolean indicating if the schema is valid or not.

##### isDirty

A boolean indicating if the form has changed since is initial state or its latest successful submission.

##### isSubmitting

A boolean indicating if the form is being submitted.

##### isSubmitted

A boolean indicated if the form has already been submitted.

##### values

The current form values.

##### errors

The current form errors.

##### handleChange

Programatically change the value of a field.

```typescript
formal.handleChange("firstName", "New First Name");
```

##### handleReset

Programatically reset the form to its initial state or last successful values in case it has been submitted.

```typescript
formal.handleReset();
```

##### handleSubmit

Programatically submit the form.

```typescript
formal.handleSubmit();
```

##### getFormProps

Returns the props to spread to a form element. Wraps `formal.handleSubmit` method.

> **NOTE:** Since React Native does not have a `<form />` equivalent, this method will throw an error.

Example:

```typescript
formal.getFormProps = () => ({
  onSubmit: e => {
    e.preventDefault();
    formal.handleSubmit();
  };
})

<form {...formal.getFormProps()} />;
```

##### getFieldProps

Returns the props to spread to a form field. Wraps `formal.values[field]` value and `formal.handleChange` method.

```typescript
formal.getFieldProps = field => ({
  name: field,
  id: field,
  value: formal.values[field],

  // On React Web:
  onChange: e => {
    e.preventDefault();
    formal.handleChange(field, e.target.value);
  },

  // On React Native:
  onChangeText: text => {
    formal.handleChange(field, text);
  }
});

// React Web:
<input {...getInputProps('firstName')} type="text" />

// React Native:
<TextInput {...getInputProps('firstName')} />
```

##### getResetButtonProps

Useful if you have a reset button on your form. Wraps `handleReset` method.

```typescript
formal.getResetButtonProps = () => ({
  // On React Web:
  onClick: () => {
    formal.handleReset();
  },

  // On React Native:
  onPress: () => {
    formal.handleReset();
  }
});

// React Web:
<button {...formal.getResetButtonProps()}>Reset form</button>

// React Native:
<Button {...formal.getResetButtonProps()} title="Reset form" />
```

##### getSubmitButtonProps

Returns the props to spread to a submit button. Wraps `formal.isValid`, `formal.isDirty` and `formal.isSubmitting` flags and `formal.handleSubmit` method.

```typescript
formal.getSubmitButtonProps = () => ({
  disabled: !formal.isValid || !formal.isDirty || formal.isSubmitting,

  // On React Web:
  onClick: () => {
    formal.handleSubmit()
  },

  // On React Native:
  onPress: () => {
    formal.handleSubmit();
  }
});

// React Web:
<button {...formal.getSubmitButtonProps()}>Submit form</button>

// React Native:
<Button {...formal.getSubmitButtonProps()} title="Submit form" />
```

<!-- END api -->

## Contributing

<!-- START contributing -->

If you have any question, suggestion or recommendation, please [open an issue](issues/new) about it.

If you want to purpose some changes create a [pull request](./pulls).

### Installing the project

1. `git clone git@github.com:kevinwolfcr/formal.git && cd $_`.
2. Install dependencies `yarn install`.

### Running the development environment

This library uses [storybook](https://storybooks.js.org) to visually document itself.

### Running the tests

To run the tests run `yarn test` or `yarn test --watch` to watch for changes. **Please write some tests if you are changing anything 🙏🏻**.

### Validating the changes

Although this is connected to TravisCI, it's encourage to run `yarn validate` in order to make sure everything works as expected.

<!-- END contributing -->

## Other solutions

<!-- START other-solutions -->

This is heavily inspired on [formik](https://github.com/jaredpalmer/formik), which currently does not support react hooks. If you are aware or maintain a similar solution, please let me know.

<!-- END other-solutions -->

## License

[MIT](./LICENSE)
