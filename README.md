# Lerna monorepo with multiple react modules

This is a traditional package-based monorepo with 2 modules in it.
The first is a mock component library which defined a react component.
The second is a mock react app which is dependent on the first.
Lerna is used to bootstrap the monorepo, which causes symbolic links
to be create from the app to the lib. This is a pattern commonly
found in monorepos, but as lerna is used as the monorepo package
controller (instead of, eg npm workspaces) then there is an issue.

Both modules have a dev dependency on react in order to execute their
tests. The app has a (runtime) dependency on react as well. So both
modules have a copy of react within their node_modules dir.

When a test is executed in the app, the test runner
must resolve the components in the app. The resolver follows the symbolic
link created by bootstrap from the app to the lib when it resolves the
components from the lib. The component requires react, and the resolver
begins following the node resolution algorithm from the component lib
to find it, which it does within the lib's node_module folder. React
considers this an error and the test fails with a react error.

This monorepo is a set of experiments to see if there is any way to
configure the monorepo to avoid this 'double react' problem.