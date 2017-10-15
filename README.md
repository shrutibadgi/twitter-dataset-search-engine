1.Download the file projectTest.rar, extract the file.

2.Start mongodb server using terminal

2. Import database using the following command in another terminal.
mongoimport --headerline --db users --collection tweets --type csv --file tweets.csv
After successful import type mongo and start mongo client.


3. Install express using the following command in new terminal
npm install -g express-generator(if express not present on your machine)

4. On a new terminal,type cd projectTest and then type npm start

5.Open a browser and head for localhost:3000/textsearch

6.Enter your search text and search.

7.Result for the search would be displayed on the searchresult page.

8.The fromUser link directs to add comment page. Add your comment here. On successful add of comment check the record in mongo client terminal using db.tweets.find({id:userid})

