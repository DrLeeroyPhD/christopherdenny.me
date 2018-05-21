<template>
  <div>
    <div class="bg-cover">
      <div class="bg-filter"></div>
    </div>
    
    <nav>
      <a v-link="{ path: '/home' }">Home</a>
      <a v-link="{ path: '/about' }">About</a>
      <a v-link="{ path: '/projects' }">Projects</a>
      <a v-link="{ path: '/contact' }">Contact</a>
    </nav>
    
    <div id="main-container">
      <div id="code">
        <p>
          &lt;html&gt;<br>
          <span class="indent1">&lt;title&gt;</span><br>
          
          <!--  TYPER FOR CODE SECTION
          <span class="typer indent2" id="code-typer" data-words="Home" data-colors="#fff" data-delay="100"></span>
          <span class="cursor indent2" data-owner="code-typer" data-cursorDisplay="|"></span><br>
          <button class="typer-start" data-owner="code-typer">Start</button><br>
          -->
          
            <span class="indent2">Home</span><br>
          <span class="indent1">&lt;/title&gt;</span><br><br>
          <span class="indent1">&lt;style type="text/css"&gt;</span><br>
          <span class="indent2">.header &#123;color:#fff&#125;</span>
        </p>
      </div>
      
      <router-view class="content-container"></router-view>  
    </div>
  </div>
</template>

<style>
  /** GLOBALS **/
  h1, h2, p, a{
    color: #fff;
  }
  
  .bg-cover{
    z-index: -1000;
    background: #333 url("https://images.pexels.com/photos/220357/pexels-photo-220357.jpeg?auto=compress&cs=tinysrgb&h=650&w=940") no-repeat top center;
    background-size: cover;
    width: 105%;
    height: 105%;
    position: absolute;
    top: -8px;
    left: -8px;
    filter: brightness(0.3) blur(4px);
  }
  
  .bg-filter{
    z-index: -999;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(240, 180, 40, 0.4);
  }

  /** NAVIGATION **/
  nav{
    position: static;
    margin-top: 25px;
    margin-left: 3%;
    width: 94%;
    display: flex;
    justify-content: left;
    text-align: left;
    border: 5px solid #fff;
  }
  
  nav a{
    text-decoration: none;
    font-size: 1.75em;
    padding: 15px 20px;
    transition: color .25s;
  }
  
  nav a:hover{
    color: #bbb;
    transition: color .25s;
  }
  
  /** Separation of Code and Container sections **/
  #main-container{
    margin-top: 50px;
    margin-left: 3%;
    width: 94%;
    display: grid;
    grid-template-columns: 30% 70%;
  }
  
  /** CODE SECTION **/
  #code{
    font-size: 1.5em;
    font-family: monospace;
  }
  
  .indent1{
    margin-left: 2em;
  }
  
  .indent2{
    margin-left: 4em;
  }
  
  /** SIDEBAR **/
  /** !important!important!important **/
  .sidebar{
    width: 70%;
    background-color: rgba(0, 0, 0, 0.6);
    padding: 25px;
    justify-self: end;
  }
</style>