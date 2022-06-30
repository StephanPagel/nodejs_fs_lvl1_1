const fs = require("fs");

fs.readFile("blog1.txt", "utf8", (err, data) => {
  if (err) {
    console.log('Fehler beim Lesen von "blog1.txt"', err);
    return;
  }
  console.log(data);

  fs.writeFile("blog1.txt", "Wie gehts es dir?", (err) => {
    if (err) {
      console.log('Fehler beim Schreiben in "blog1.txt"', err);
      return;
    }
    console.log('Änderungen in "blog1.txt" gespeichert');

    fs.writeFile("blog2.txt", "Hallo", (err) => {
      if (err) {
        console.log('Fehler beim Erstellen von "blog2.txt"', err);
        return;
      }
      console.log('Datei "blog2.txt" wurde erstellt.');

      fs.mkdir("assets", (err) => {
        if (err) {
          console.log('Fehler beim Erstellen des Ordners "assets"', err);
        }
        if (fs.existsSync("assets")) {
          fs.rmdir("assets", (err) => {
            if (err) {
              throw err;
            }
            console.log('Ordners "assets" wurde gelöscht.');
          });
        }
        console.log('Ordners "assets" wurde erstellt.');

        fs.writeFile("delete.txt", "", (err) => {
          if (err) {
            console.log('Fehler beim Erstellen der Datei "delete.txt"', err);
          }
          if (fs.existsSync("delete.txt")) {
            fs.unlink("delete.txt", (err) => {
              if (err) {
                throw err;
              }
              console.log('Ordners "delete.txt" wurde gelöscht.');
            });
          }
          console.log('Datei "delete.txt" wurde erstellt.');

          fs.writeFile("Hello.txt", "Keinen Bock mehr...", (err) => {
            if (err) {
              throw err;
            }
            console.log('Datei "Hello.txt" wurde erstellt.');

            fs.rename("Hello.txt", "HelloWorld.txt", (err) => {
              if (err) {
                throw err;
              }
              console.log("Datei wurde umbenannt.");
            });
          });
        });
      });
    });
  });
});
