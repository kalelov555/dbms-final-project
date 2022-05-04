const express = require("express");
const oracledb = require("oracledb");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: true }));

app.get("/home", (req, res) => {
  oracledb.getConnection(
    {
      user: "final",
      password: "123",
      connectString: "localhost/orclpdb",
    },
    (err, connection) => {
      if (err) {
        res.send(err);
      }
      connection
        .execute(
          `
  DECLARE 
    c1 SYS_REFCURSOR;
  BEGIN 
    OPEN c1 FOR SELECT * FROM BOOKS
    WHERE BOOKNAME = 'WONDER' OR BOOKNAME = 'HARRY POTTER' OR BOOKNAME = 'WITCHLINGS';
    DBMS_SQL.RETURN_RESULT(c1);
    triggers_pckg.create_table_with_triggs('BOOKS');
  END;`,
          []
        )
        .then((value) => {
          const top = [];
          createItem = (id, bookName, author, description, genre, img) => {
            return {
              id: id,
              bookName: bookName,
              author: author,
              description: description,
              genre: genre,
              img: img,
            };
          };
          for (let i = 0; i < 3; i++) {
            const [id, bookName, author, description, genre, img] =
              value.implicitResults[0][i];
            top.push(createItem(id, bookName, author, description, genre, img));
          }

          res.header("Access-Control-Allow-Origin", "*");
          res.send(top);
          connection.close();
        });
    }
  );
});

app.get("/list", (req, res) => {
  oracledb.getConnection(
    {
      user: "final",
      password: "123",
      connectString: "localhost/orclpdb",
    },
    (err, connection) => {
      if (err) {
        res.send(err);
      }
      console.log("CONNECTED TO FINAL");
      connection
        .execute(
          `
    DECLARE 
      c2 SYS_REFCURSOR;
    BEGIN 
      OPEN c2 FOR SELECT * FROM BOOKS;
    DBMS_SQL.RETURN_RESULT(c2);
      END;`,
          []
        )
        .then((val) => {
          console.log("implicit", val.implicitResults[0]);
          const books = [];
          createItem = (id, bookName, author, description, genre, img) => {
            return {
              id: id,
              bookName: bookName,
              author: author,
              description: description,
              genre: genre,
              img: img,
            };
          };

          for (let i = 0; i < val.implicitResults[0].length; i++) {
            const [id, bookName, author, description, genre, img] =
              val.implicitResults[0][i];
            books.push(
              createItem(id, bookName, author, description, genre, img)
            );
          }
          res.header("Access-Control-Allow-Origin", "*");
          res.send(books);
          connection.close();
        });
    }
  );
});

app.get("/list/books/:bookname", (req, res) => {
  const bookName = req.params.bookname;
  oracledb.getConnection(
    {
      user: "final",
      password: "123",
      connectString: "localhost/orclpdb",
    },
    (err, connection) => {
      if (err) {
        res.send(err);
      }
      connection
        .execute(
          `
    DECLARE
      curs SYS_REFCURSOR;
    BEGIN
      curs := SEARCHBYBOOK(:bookName);
      DBMS_SQL.RETURN_RESULT(curs);
    END;
    `,
          [bookName]
        )
        .then((val) => {
          console.log(val.implicitResults);
          const books = [];
          createItem = (id, bookName, author, description, genre, img) => {
            return {
              id: id,
              bookName: bookName,
              author: author,
              description: description,
              genre: genre,
              img: img,
            };
          };

          const [id, bookName, author, description, genre, img] =
            val.implicitResults[0][0];
          books.push(createItem(id, bookName, author, description, genre, img));

          res.header("Access-Control-Allow-Origin", "*");
          res.send(books);
          connection.close();
        });
    }
  );
});

app.get("/list/genre/:genre", (req, res) => {
  const genre = req.params.genre;
  oracledb.getConnection(
    {
      user: "final",
      password: "123",
      connectString: "localhost/orclpdb",
    },
    (err, connection) => {
      if (err) {
        res.send(err);
      }
      connection
        .execute(
          `
    DECLARE
      curs SYS_REFCURSOR;
    BEGIN
      curs := SEARCHBYGENRE(:genre);
      DBMS_SQL.RETURN_RESULT(curs);
    END;
    `,
          [genre]
        )
        .then((val) => {
          const books = [];
          createItem = (id, bookName, author, description, genre, img) => {
            return {
              id: id,
              bookName: bookName,
              author: author,
              description: description,
              genre: genre,
              img: img,
            };
          };

          for (let i = 0; i < val.implicitResults[0].length; i++) {
            const [id, bookName, author, description, genre, img] =
              val.implicitResults[0][i];
            books.push(
              createItem(id, bookName, author, description, genre, img)
            );
          }
          res.send(books);
          connection.close();
        });
    }
  );
});

app.post("/form/add/book", (req, res) => {
  const book = req.body.user;
  console.log("book", book);
  oracledb.getConnection(
    {
      user: "final",
      password: "123",
      connectString: "localhost/orclpdb",
    },
    (err, connection) => {
      if (err) {
        res.send(err);
      }
      connection.execute(
        `
      INSERT INTO BOOKS
      VALUES(:id, :bookname, :author, :description, :genre, :img)
    `,
        [
          book.id,
          book.bookName,
          book.author,
          book.description,
          book.genre,
          book.img,
        ],
        { autoCommit: true }
      );
    }
  );
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
