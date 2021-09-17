<template>
        <div class="titlu">{{Title}}</div>
</template>

<script>
export default {
    data() {
        return {
            Title: "CMS APP",
        };
    }
    
};
</script>

<style>
.titlu {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 20px auto;
  width: 400px;
  height: 100px;
  background: white;
  border-radius: 150px;
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  font-weight: lighter;
  letter-spacing: 2px;
  transition: 1s box-shadow;
  background: rgb(147,12,12);
  background: linear-gradient(90deg, rgba(147,12,12,1) 0%, rgba(2,0,36,1) 60%);
  color:white;
  font-size: 40px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.titlu:hover {
  box-shadow: 0 5px 35px 0px rgba(0,0,0,.1);
}

.titlu:hover::before, .titlu:hover::after {
  display: block;
  content: '';
  position: absolute;
  width: 250px;
  height: 100px;
  background: blue;
  border-radius: 150px;
  z-index: -1;
  animation: 1s clockwise infinite;
}

.titlu:hover:after {
  background: cyan;
  animation: 2s counterclockwise infinite;
}

@keyframes clockwise {
  0% {
    top: -5px;
    left: 0;
  }
  12% {
    top: -2px;
    left: 2px;
  }
  25% {
    top: 0;
    left: 5px;    
  }
  37% {
    top: 2px;
    left: 2px;
  }
  50% {
    top: 5px;
    left: 0;    
  }
  62% {
    top: 2px;
    left: -2px;
  }
  75% {
    top: 0;
    left: -5px;
  }
  87% {
    top: -2px;
    left: -2px;
  }
  100% {
    top: -5px;
    left: 0;    
  }
}

@keyframes counterclockwise {
  0% {
    top: -5px;
    right: 0;
  }
  12% {
    top: -2px;
    right: 2px;
  }
  25% {
    top: 0;
    right: 5px;    
  }
  37% {
    top: 2px;
    right: 2px;
  }
  50% {
    top: 5px;
    right: 0;    
  }
  62% {
    top: 2px;
    right: -2px;
  }
  75% {
    top: 0;
    right: -5px;
  }
  87% {
    top: -2px;
    right: -2px;
  }
  100% {
    top: -5px;
    right: 0;    
  }
}
</style>