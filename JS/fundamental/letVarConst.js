/* - **Var Scope**:
  - `var` has function-level or global scope.
  - Does not respect block-level scope (e.g., within `{}`).
  - Changes within a block affect variables outside the block.
  - **Example**:
    ```javascript
    function example() {
      var x = 10;
      if (true) {
        var x = 20; // Reassigns outer `x`
      }
      console.log(x); // Outputs: 20
    }
    example();
    ```

- **Let and Const Scope**:
  - `let` and `const` have block-level scope.
  - Variables are contained within blocks, reducing scope-related issues.
  - **Example**:
    ```javascript
    function example() {
      let y = 10;
      if (true) {
        let y = 20; // New `y` within block
      }
      console.log(y); // Outputs: 10
    }
    example();
    ```

- **Const Immutability**:
  - `const` variables cannot be reassigned.
  - Useful for declaring constants or references that shouldn't change.
  - **Example**:
    ```javascript
    const pi = 3.14;
    // pi = 3.14159; // Error: Assignment to constant variable
    ``` */