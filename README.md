![Should I Shred Icon](./public/wave-icon.png)

# Should I Shred

Check your local surf conditions with Should I Shred. Built with React, Node, Express, and MongoDB, this surf conditions tracker is designed to be used for quickly gathering swell information for 100's of locations around the US.

## About

Should I Shred came from a wish I had for a website I could visit and, within seconds, see the current surf conditions to make a determination as to whether or not I should paddle out. No drawn-out summaries or live-cams like Surfline, and made for ease-of-use on mobile devices (which was extremely lacking at the time for another favorite site of mine: Swellinfo). Should I Shred is built with Create React App along with a Node backend that pulls data from NOAA's National Buoy Data Center and then stores that information in a MongoDB database, which can quickly be pulled from when the data is still relevant. As the NBDC bouy data is stored in a text file which updates every 30 to 60 minutes as opposed to a standard api, I decided to turn to the open source community to help out with parsing the relevant data I need from the text file, and made heavy use of a module named [Buoy JS](https://github.com/giannif/buoy-js).

## Challenges

**Buoy JS**

This module proved to significantly reduce my workload when it came to parsing the data that the NDBC provides; however, as Buoy JS seems to have been a personal project (one that had not been committed to in over 3 years at that) it did not come without it's share of hiccups. Since the module had not been updated in quite some time, it had quite a few dependencies outdated. What was initially a nightmare of error codes turned into quite the learning experience however, as I delved deeply into the module itself. After a bit of time updating dependencies as well as running the tests the creator had set up - tweaking until all tests passed, I eventually came upon a working version of Buoy JS, and it is just what my backend needed.

**Hosting**

Should I Shred is the first React app I have attempted to create alongside a Node backend. This brought with it some challenges, and most significantly the challenge of hosting. My initial plans were to deploy the front and backend to the same server, at which point I would tell the server to crank up the frontend on one port and the backend on another. This proved extremely difficult with Heroku's free hosting plan however (potentially not even possible?). Unfortunate as this roadblock was, it also came at the very end of the project as I was attempting to get the site live, but after some heartache I decided my best course of action would be to split the project into two distinct halves and deploy seperately. As with the issues I ran into with Buoy JS, this refactor of the project turned out to be a very good learning experience in terms of the knowledge amassed about proxying within React, full-stack project folder structure, etc.

## Future Improvements

This was the first time I built an application with front and backends that I would host seperately. As such, I really didn't entirely know how it was going to come together until I got into the meat of the project and faced the challenges head on. If I were to do a major refactor of the site with everything I know now, I would start with solely the backend. In doing so, the aim would be to construct an api (either REST or GraphQL) that pulls from the MongoDB database I currently have set up, and that can be interfaced with by the frontend as simply as possible. On the frontend, I would likely ditch CRA in favor of Next JS and its use of `getInitialProps` (in this case I may rethink the backend a bit to introduce SSR), or Gatsby for its simplicity in transforming GraphQL data for static page rendering. 

Outside of framework overhauls, there are plenty of tips and tricks I have picked up since launching Should I Shred; Styled Components, React hooks, physics based animation, even things like more extensive use of single line JS conditional expressions. Overall I am happy with the project, however, as it mostly achieved what my initial goals for it had been, and I believe it will be a good indication of my development skills at the time when looking back on it moving forward.