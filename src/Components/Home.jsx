import React from "react";



import music from './music2.png';
import play from './play.png'
import { Link, useNavigate } from "react-router-dom";
import Songs from "./Songs";
import home1 from './home1.png';
import home2 from './home2.jpg';



function Home() {


  let history = useNavigate();

  const handleDel = (id) => {
    var index = Songs.map(function (s) {
      return s.id
    }).indexOf(id);

    Songs.splice(index, 1);

    history('/');


  }

  const handleEdit = (id, name, age, email) => {
    localStorage.setItem('Name', name);
    localStorage.setItem('Id', id);
    localStorage.setItem('Age', age);
    localStorage.setItem('Email', email);

  }




  return (
    <>




      <h1 id="lib" >Start listening and add to your library</h1>

      <div class="card" >
  <img src={home2} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Visit the My World to find today’s top talent, featured artists, and playlists. </p>
  </div>
</div>

      <div id="mainb">


        <div id="block1"> <h1>listen to music  and enjoy what  you love</h1>

          <Link to="/signup"><button type="button" class="btn btn-outline-primary" id="sign">SIGN UP</button></Link>

        </div>

      </div>


      <div class="shadow-lg p-3 mb-5 bg-body rounded" id="music"><img src={music} />  Listen to the top hits</div>

      <table class="table table-dark table-borderless" id="songtable">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Artist</th>
            <th scope="col">Album</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Blinding Lights</td>
            <td>Weeknd</td>
            <td>After Hours</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>20 min</td>
            <td>Lil uzi vert</td>
            <td>Faze</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td >trust issues</td>
            <td>Drake</td>
            <td>Issues</td>
          </tr>
        </tbody>
      </table>
      



    </>
  )
}

export default Home;