<h1 align="center">
  <a href="https://docklight.dev" target="_blank">
    <img 
        style="display: block; 
              margin-left: auto;
              margin-right: auto;
              "
        src="Client/assets/docklightlogo.png" 
        height=300
        alt="Docklight">
    </img>
  </a>
</h1>

<h3 align="center"><strong>A GUI for your Docker container metrics</strong></h3>

<div align="center">
  <a href="https://docklight.dev" target="_blank">
    <img src="https://img.shields.io/badge/website-docklight-teal.svg" />
  </a>
  <img alt="license" src="https://img.shields.io/badge/License-MIT-green.svg">
  <img alt="last-commit" src="https://img.shields.io/github/last-commit/oslabs-beta/docklight?color=orange">
</div>
<br/>

**Docklight** is a container metrics monitoring solution that makes organizing, monitoring, and visualizing your metrics easy. The Docklight GUI interface is clean, easy to understand, and provides you with all of the information you need to manage and monitor your Docker containers outside of the Docker Desktop.

# How does it work?

After installing **Docklight**, you can run it natively on your localhost. The application will speak to your Docker Daemon and provide you with real-time, live-streamed data in charts that update as your data changes.

<p align="center">
  <img src="Client/assets/individualgif.gif" width="600px" margin="auto"/>
</p>

## Get a micro and macro view of your data

With **Docklight**, you can see an overall average of your data in addition to tracking the metrics of your individual containers. You also have the option of viewing your containers sorted by active and inactive, and starting and stopping them with the click of a button from within the GUI. 

<p align="center">
  <img src="Client/assets/overviewgif.gif" width="600px" margin="auto"/>
</p>

<p align="center">
  <img src="Client/assets/conimage.png" width="600px" margin="auto"/>
</p>

# How to get **Docklight**

First:

```
git clone https://github.com/oslabs-beta/Docklight.git
```

Clone our repository onto your local machine. 

Next: 

```
npm install
```

Install any dependencies you might need to run this repo. 

**Make sure your Docker Desktop app is running before this next step. Otherwise, Docklight won't be able to reach your Daemon!**

Please also keep in mind that Docklight uses ports **8080** and **3000**.

Finally:

```
npm run dev
```

Run our application and view your data!

# Contributing
Please submit a pull request or reach out to us if you're interested in improving **Docklight**!

# Contributors
<ul>
  <li>
    Luis Gomez
    <a href="https://www.linkedin.com/in/luisgomezo/" target="_blank">
      <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=social&logo=linkedin" />
    </a>
      <a href="https://github.com/Luisortzg" target="_blank">
      <img src="https://img.shields.io/badge/Github-0077B5?style=social&logo=github" />
    </a>
  </li>
  <li>
    Anna Larouche
    <a href="https://www.linkedin.com/in/anna-larouche" target="_blank">
      <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=social&logo=linkedin" />
    </a>
      <a href="https://github.com/amlarouche" target="_blank">
      <img src="https://img.shields.io/badge/Github-0077B5?style=social&logo=github" />
    </a>
  </li>
  <li>
    Dennis Park
    <a href="https://www.linkedin.com/in/dennishpark/" target="_blank">
      <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=social&logo=linkedin" />
    </a>
      <a href="https://github.com/hdennispark" target="_blank">
      <img src="https://img.shields.io/badge/Github-0077B5?style=social&logo=github" />
    </a>
  </li>
  <li>
    Andrew Rama
    <a href="https://www.linkedin.com/in/andrew-rama-075b3a145/" target="_blank">
      <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=social&logo=linkedin" />
    </a>
      <a href="https://github.com/RamaSaga" target="_blank">
      <img src="https://img.shields.io/badge/Github-0077B5?style=social&logo=github" />
    </a>
  </li>
</ul>

# Resources
Built using React, Typescript, and Tailwind

