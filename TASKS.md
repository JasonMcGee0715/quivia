# Tasks for Friday 2/1

## Jason
- Create component structure for Gameboard, this will include the following components.
    - `TheGameBoard` - to fetch data and manage state for:
        - `TheQuestion` - For the generated question, should take a string prop and display it.
        - `TheAnswers` - For displaying the generated array of answers from `TheGameBoard`, should take an array as a prop and map it.
            - `AnAnswer` - Should be used via the map in `TheAnswers`
        - `TheScore` - to read & update the score data `TheGameBoard`

## Sean
- Create component structure for everything else outside of `TheGameBoard` component.
    - `TheHeader` - to display the static logo and static tagline.
    - `TheFooter` - to contain links and version information.
        - `ALink` - to be passed a name and URL to display inside `TheFooter`

Keep responsiveness in mind when developing component structures. No CSS yet unless you'd like to get a head start.
    