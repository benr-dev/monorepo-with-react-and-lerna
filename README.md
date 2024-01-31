# Lerna monorepo with multiple react modules

This is a traditional package-based monorepo with 2 modules in it.
The first is a mock component library which defined a react component.
The second is a mock react app which is dependent on the first.
Lerna is used to bootstrap the monorepo, which causes symbolic links
to be create from the app to the lib. This is a pattern commonly
found in monorepos, but as lerna is used as the monorepo package
controller (instead of, eg npm workspaces) then there is an issue.

Both modules have a dev dependency on react in order to execute their
tests. The component-lib has react as a peer dependency since any
dependent module which uses the components will need to provide the
react runtime to use them. The app has a (runtime) dependency on
react.

Jest is used as the test runner. This requires some specific configuration
in order to enable the typescript and jsx transformations which
jest uses to convert the test code
