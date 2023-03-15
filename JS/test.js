const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>self help</title>
      <link rel="icon" href="https://cdn3.vectorstock.com/i/1000x1000/79/27/icon-of-a-fountain-pen-and-signature-vector-1957927.jpg">
      <link rel="stylesheet" href="/CSS/learn.css">
  </head>
  <body >
      <nav class="contact"><img src="https://media.istockphoto.com/id/1130588880/vector/black-phone-icon-on-white-background-vector-illustration.jpg?s=612x612&w=0&k=20&c=DHVs1gkVRUhXwD9NjDn4uBXb8jt8gCRFagjkJSimmSg=" alt="image" style="height: 13px;">
          8318851932 | <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/1200px-Gmail_icon_%282020%29.svg.png" alt="image" style="height: 12px;">
          <a href="tarurak4@gmail.com">tarurak4@gmail.com</a>
          <div class="follow">
              follow me at:
              <a href="https://www.instagram.com/">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png" alt="instagram" style="height: 15px;">
              </a>|
              <a href="https://www.linkedin.com/in/tarun-srivastava-4b44b8256/">
                  <img src="https://pbs.twimg.com/profile_images/1478307374506995713/6RA1Ax4__400x400.jpg" alt="linkedin" style="height: 17px;">
              </a>|
              <a href="https://github.com/Lord-Morpheus">
                  <img src="https://pbs.twimg.com/profile_images/1414990564408262661/r6YemvF9_400x400.jpg" alt="github" style="height: 15px;">
              </a>
          </div>
      </nav>
      
      <header class="navigate">
          <a href="#home">home</a>
          <a href="https://codeforces.com/problemset" target="_blank">codeforces</a>
          <a href="https://www.hackerrank.com/dashboard" target="_blank">hackerrank</a>
      </header>
      <section class="image">
          <img src="https://elephant.art/wp-content/uploads/2022/06/z8n1e3oajiu81.png" alt="image" style="width: 100%; height: 350px">
          <div class="upper"> let's study</div>
      </section>
      <!-- <span class="span1">source difficulty</span> -->
      <section class="filter">
          <form action="source">
              <label for="source">
                  <select name="filter">
                      <option value="select">select source</option>
                      <option value="site">codeforces</option>
                      <option value="site">hackerrank</option>
                  </select>
              <label for="diff"></label>
                  <select name="difficulty" >
                      <option value="select">select difficulty</option>
                      <option value="800">800</option>
                      <option value="900">900</option>
                      <option value="1000">1000</option>
                  </select>
              </label>
              <button type="submit" onclick="alert('filtered')">search </button> 
          </form>
      </section>
      <section class="problem">
          1. You are given three integers a
          , b
          , and c
          . Determine if one of them is the sum of the other two.
          <br><br>
          Input: <br>
          The first line contains a single integer t
           (1≤t≤9261
          ) — the number of test cases.
          
          The description of each test case consists of three integers a
          , b
          , c
           (0≤a,b,c≤20
          ). <br>
          <br>
          Output: <br>
          For each test case, output "YES" if one of the numbers is the sum of the other two, and "NO" otherwise.
          
          You can output the answer in any case (for example, the strings "yEs", "yes", "Yes" and "YES" will be recognized as a positive answer). <br><br>
          <button onclick="show()">show code</button>
          <div id="code1" >
              have to find a way to add code
          </div>
      </section>
      <script src="/JS/learn.js">
      </script>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});