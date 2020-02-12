var express = require('express'),
    mustache = require('mustache-express'),
    path = require('path');

var app = express();

app.engine('mustache', mustache());
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'mustache');
app.set('views', path.resolve(__dirname, 'mustache'));

app.get("/", function(request, response) {
    response.status(200);
    response.type('text/html');
    response.send('<h1>Landing Page</h1>');
});

app.get("/page", function(request, response) {
    response.render("page", {
        'title': 'Guest Book',
        'entries': [{
                'subject': 'Good day out',
                'review': 'We had a really good time visiting the museum.'
            },
            {
                "subject": "Liked the exhibition",
                "review": "Good to see the Glasgow Boys again."
            },
            {
                "subject": "Magical few hours",
                "review": "Magnificent looking building."
            }
        ]
    });
});

app.use(function(request, response) {
    response.type('text/plain');
    response.status(404);
    response.send("Bad luck, 404");
});

app.listen(app.get('port'), function() {
    console.log('server running');
});