# capstone-2-enjoy-the-outdoors

- Create an index.js file

- National Parks page

  - Location Selector

    - Includes a dropdown (/<select> element) for Location search type

  - **References**

    - 'Select element': Workbook 4 (pages 3-3 - 3-6)

      - Creating options (using 'new Option' method) and appending it to the Location Selector dropdown element.
        Options are gathered from the array in location-data.js

  - **References**

    - 'Creating options': Workbook 4 (page 3-4)

            - Matching location based on a park's 'State' property (from national-parks.js array); using the filter() method to find multiple objects that match

  - **References**

    - 'filter() Method': Workbook 5 (page 1-9; page 1-25)

  - Information Section (div?)

    - When user selects a specific location, it displays the corresponding info from the array located in national-parks.js

      - onChange event (best to use .addEventListener() method to be able to add multiple events if needed) - .forEach((something) => {
        selectedLocation == locationSelectorEl.value
        })
        this will be needed to loop through the national-parks.js array.

  - **References**

    - 'onChange event handler': Workbook 4 (page 3-14)
    - '.addEventListener() method exapmle:' (https://github.com/benwilhelm/yearup-2304--wb5--adventures/blob/main/scripts/index.js) or https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

    - Displays selected information in a list/table, includes:
      - Location name
      - Address
      - City
      - State
      - Zip
      - Phone number

- **References**

  - 'Hiding and showing elements': Workbook 3 (page 3-10)

- **Helpful hint**

  - When you are working on the "Search by Park Type", you need to make sure the two strings have the same casing when you search. The easiest way to do this is to use the String object's methods: .toLowerCase() or .toUpperCase() to make the strings the same case.

- Park Selector

  - Includes a dropdown (/<select> element) for Park Type search type

    - Creating options (using 'new Option' method) and appending it to the Park Selector dropdown element. Options are gathered from the array in parksTypeData.js

      - Matching park types based on the 'LocationName' property; using the filter() method to find multiple objects that match

- Information Section (div?)

  - When user selects a specific park type, it displays the corresponding info from the array located in national-parks.js

    - onChange event (best to use .addEventListener() method to be able to add multiple events if needed) - .forEach((something) => {
      selectedParkType == parkTypeSelectorEl.value
      })
      this will be needed to loop through the national-parks.js array.

  - Displays selected information in a list/table, includes:
    - Location name
    - Address
    - City
    - State
    - Zip
    - Phone number
