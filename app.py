from flask import Flask, render_template, send_file, request

app = Flask(__name__)

links = {
	"Github": "https://www.github.com/CaitlynZ/",
	"LinkedIn": "https://www.linkedin.com/in/caitlynzhang/"
}


@app.route('/', methods=["GET", "POST"])
def index():
    if request.method == "POST":
        return send_file("Resume.pdf", attachment_filename="Caitlyn_Resume.pdf", as_attachment=True)
    else:
    	return render_template("index.html", links=links)
    
@app.route('/<name>')
def index2(name):
    return "hello world " + name

if __name__ == '__main__':
	app.run(debug=True, host='127.0.0.1')
