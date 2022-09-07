React Redux Calendar - Google Copy
--
Basic calendar with Redux for state management.

### Notes
- Latest version of React, using hooks.
- Latest version of Redux, using hooks.
- Unit testing with `jest` and `react-test-renderer`.
- Date management with `date-fns` .
- OpenWeatherMap API for obtaining weather info (not finished/still in progress).

### Project structure
- All the components are structured by the following rules:
  - A folder with the component name in *PascalCase*.
  - A `index.js` file with the component code.
  - A *components* folder with all depending components inside (with the same structure).
  - Optionally, all the files required only by that component.
- The state is managed by Redux using the [*re-ducks*]pattern for file structure.
  
### Features
 - [x] Add reminder (day, time, city).
 - [x] Color for reminder.
 - [] Weather for reminder.
 - [x] Edit reminder.
 - [x] Remove reminder.
 - [x] Remove all reminders.

Since i had a little bit more time now to do it again i started this new Project and styled it way better. Used Redux and combined it with React Hooks. This took me quite some time :D
Hope I followed all of the rules for the project. And hope you like it :)



