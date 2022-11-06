# ComponentsDemo

##### Components are the main building block for Angular applications. Each component consists of:

   - An HTML template that declares what renders on the page
   - A TypeScript class that defines behavior
   - A CSS selector that defines how the component is used in a template
   - Optionally, CSS styles applied to the template


##### Introduction to modules

Angular applications are modular and Angular has its own modularity system called NgModules. NgModules are containers for a cohesive block of code dedicated to an application domain, a workflow, or a closely related set of capabilities. They can contain components, service providers, and other code files whose scope is defined by the containing NgModule. They can import functionality that is exported from other NgModules, and export selected functionality for use by other NgModules.

Every Angular application has at least one NgModule class, the root module, which is conventionally named AppModule and resides in a file named app.module.ts. You launch your application by bootstrapping the root NgModule.

While a small application might have only one NgModule, most applications have many more feature modules. The root NgModule for an application is so named because it can include child NgModules in a hierarchy of any depth.
