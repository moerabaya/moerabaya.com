import * as React from "react";

export type AsProp<E extends React.ElementType> = {
  as?: E;
};

export type PropsToOmit<E extends React.ElementType, P> = keyof (AsProp<E> & P);

export type PolymorphicProps<E extends React.ElementType, P = object> = P &
  AsProp<E> &
  Omit<React.ComponentPropsWithoutRef<E>, PropsToOmit<E, P>>;
