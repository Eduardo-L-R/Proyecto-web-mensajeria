//Importando Firebase
import firebase from 'firebase';

componentWillMount(){
    this.obtenerUsuario((elementosUser) => {
      // var arreglo = this.state;
      // arreglo.jugador.nombre = this.state.nombre;
      // this.setState({arreglo});

      this.obtenerDatos(elementosUser,(datosJugador) => {
        var arreglo = this.state;
        arreglo.jugador = datosJugador;
        this.setState({arreglo});
        arreglo = this.DefinicionSegunRobot(arreglo.jugador.robot);
        this.setState({arreglo});
      });
      
    });
}

async obtenerUsuario(callback){
    await firebase.auth().onAuthStateChanged(user =>{
      this.setState({user:user});
      if(user != null){
        
        let displayName = user.displayName;
        // let email = user.email;
        // let photoURL = user.photoURL; 
        // let elementosUser = {nombre:displayName,email:email,foto:photoURL};
        callback(displayName);
      }else{
      }
    });
  }

async obtenerDatos(elementosUser,callback){
    ///UFF enrededo para conseguir elementosUser que es el usuario logueado pero viene de la funcion de arriba y luego 
    // se realiza desde el callback de arriba
    if(elementosUser != null){
      await firebase.firestore().collection("Jugadores").doc(elementosUser).onSnapshot(function(doc) {
        if(doc.exists){      
          let infoJugador = doc.data();
          callback(infoJugador);}
        else{
          let infoJugador = {
            lvl:1,
            nombre: elementosUser,
            robot:1,
              dadosAtaque:0,
              dadosDefensa:0,
              armaduraIzquierda:0,
              armaduraSuperior:0,
              armaduraDerecha:0,
              armaduraInferior:0,
              escudo:0,
              habilidad:0,
              habilidadesCore:[0,0,0,0,0],
              accesorios:[2],
              accesoriosIzquierda:[0,0],
              accesoriosSuperior:[0,0],
              accesoriosDerecha:[0,0],
              costoTotal:0,
            hp: 0,
            hpactual:0,
            avatar: 0,
            peso:0,
          };
          callback(infoJugador);}
      });
    }; 
  }


  async handleAuth(){
    const provider = await new firebase.auth.GoogleAuthProvider();

    await firebase.auth().signInWithPopup(provider)
      .then(result => {console.log(`${result.user.email} ha inciado sesión`); let resultado=result.displayName;this.setState({nombre:resultado});})
      .catch(error => console.log(`Error ${error.code}: ${error.message}`));
 
  }

  async handleAuthAnon(){
    let nombreTemporalAnonimo = this.state.jugador.nombre;
    await firebase.auth().signInAnonymously()
      .then(result => alert(`Ha inciado sesión de forma Anonima`))
      .catch(error => console.log(`Error ${error.code}: ${error.message}`));
    
      this.obtenerDatos(nombreTemporalAnonimo,(datosJugador) => {
      var arreglo = this.state;
      arreglo.jugador = datosJugador;
      this.setState({arreglo});
    });
  }

  async handleLogout(){
    await firebase.auth().signOut()
    .then(result =>{ 
      console.log(`${result.user.email} ha salido de la sesión`)})
    .catch(error => console.log(`Error ${error.code}: ${error.message}`));
    
    let reseteandoJugador = {
      lvl:0,
      nombre:"Anonimo",
      robot:0,
        dadosAtaque:0,
        dadosDefensa:0,
        armaduraIzquierda:0,
        armaduraSuperior:0,
        armaduraDerecha:0,
        armaduraInferior:0,
        escudo:0,
        habilidad:0,
        habilidadesCore:[0,0,3,0,0],
        accesorios:[2],
        accesoriosIzquierda:[0,0],
        accesoriosSuperior:[0,0],
        accesoriosDerecha:[0,0],
        costoTotal:0,
      hp: 0,
      hpactual:0,
      avatar: 0,
      peso:0,
    };
    // let arreglo = this.state;
    // arreglo = arreglo.jugador;
    // arreglo = reseteandoJugador;
    this.setState({jugador:reseteandoJugador});
  }

  agregarDatos = async () => {    
    //Agregar una tarea a la base de datos con el id del documento que se va agregar
    try{
      let refNewTask = await firebase.firestore().collection('Jugadores').doc(this.state.jugador.nombre); 
      await refNewTask.set(
        this.state.jugador
      ).then(respuesta =>{alert("actualizado correctamente",respuesta)}).catch(error=>{alert("no se actualizo correctamente la información",error)});
    }catch(error){
      alert("No se ha podido agregar informacion al usuario: ", error.message);
    }
    // Se actualiza la informacion para mostrar los nuevos valores
    this.obtenerDatos(this.state.jugador.nombre,(datosJugador) => {
      var arreglo = this.state;
      arreglo.jugador = datosJugador;
      this.setState({arreglo});
    });
}


CombateTurno= async (jugador1,jugador2)=>{

    if(jugador1[2]==0 && jugador2[2]==0){
      alert(`Empate, BRAVO!!`);
    }else if(jugador2[2]==0){
      alert(`jugador 1 a ganado con ${jugador1[2]} de vida, BRAVO!!`);
    }else if(jugador1[2]==0){
      alert(`jugador 2 a ganado con ${jugador2[2]} de vida, BRAVO!!`);
    }
    if(jugador1[2] > 0 && jugador2[2] > 0){
      let vidaJugador1=jugador1[2];
      let vidaJugador2=jugador2[2];
      //Daño del jugador 1
      if(Math.random() < 
        //porcentaje de acierto %
        50
        //
        /100){
        vidaJugador2=jugador2[2] - jugador1[1];
        alert("BOOM!! al Jugador 2")
      }else{
        // alert("Jugador 1 FALLO!!")
      }
      //Daño del jugador 2
      if(Math.random() < 
        //porcentaje de acierto %
        50
        //
        /100){
        vidaJugador1=jugador1[2] - jugador2[1];
        alert("BOOM!! al Jugador 1")
      }else{
        // alert("Jugador 2 FALLO!!")
      }
      if(vidaJugador1 <= 0 && vidaJugador2 <= 0){
        let actualizacionHpActualJugador =  this.state.jugador;
        let actualizacionHpActualJugador2 =  this.state.jugador2;
        actualizacionHpActualJugador.hpactual = [0];
        actualizacionHpActualJugador2.hpactual = [0];
        this.setState({actualizacionHpActualJugador});
        this.setState({actualizacionHpActualJugador2});
      }else if(vidaJugador1 <= 0){
        let actualizacionHpActualJugador =  this.state.jugador;
        let actualizacionHpActualJugador2 =  this.state.jugador2;
        actualizacionHpActualJugador.hpactual = [0];
        actualizacionHpActualJugador2.hpactual = [vidaJugador2];
        this.setState({actualizacionHpActualJugador});
        this.setState({actualizacionHpActualJugador2});
      }else if(vidaJugador2 <= 0){
        let actualizacionHpActualJugador =  this.state.jugador;
        let actualizacionHpActualJugador2 =  this.state.jugador2;
        actualizacionHpActualJugador.hpactual = [vidaJugador1];
        actualizacionHpActualJugador2.hpactual = [0];
        this.setState({actualizacionHpActualJugador});
        this.setState({actualizacionHpActualJugador2});
      }else{
        let actualizacionHpActualJugador =  this.state.jugador;
        let actualizacionHpActualJugador2 =  this.state.jugador2;
        actualizacionHpActualJugador.hpactual = [vidaJugador1];
        actualizacionHpActualJugador2.hpactual = [vidaJugador2];
        this.setState({actualizacionHpActualJugador});
        this.setState({actualizacionHpActualJugador2});
      }
      // try{
        console.log(this.state.jugador);
        firebase.firestore().collection('Jugadores').doc(this.state.jugador.nombre).set(this.state.jugador
        ).then(respuesta =>{alert("actualizado correctamente",respuesta)}).catch(error=>{console.log("no se actualizo correctamente la información del jugador1",error)});
        // }catch(error){
        //   alert("No se ha podido agregar informacion al usuario del jugador1: ", error.message);
        // }
      // Se actualiza la informacion para mostrar los nuevos valores
      this.FuncionParaCallbackJugador(this.state.jugador.nombre);
      // try{
        console.log(this.state.jugador2);
        firebase.firestore().collection('Jugadores').doc(this.state.jugador2.nombre).set(this.state.jugador2
        ).then(respuesta =>{alert("actualizado correctamente",respuesta)}).catch(error=>{console.log("no se actualizo correctamente la información del jugador2",error)});
        // }catch(error){
        //   alert("No se ha podido agregar informacion al usuario del jugador2: ", error.message);
        // }
      // Se actualiza la informacion para mostrar los nuevos valores
      this.FuncionParaCallbackContrincante(this.state.jugador2.nombre);
    } 
  }

  ConectarContrincante= (elementosUser,callback)=>{
    let infoJugador={}
    console.log(elementosUser);
    firebase.firestore().collection("Jugadores").doc(elementosUser).onSnapshot(function(doc) {
      if(doc.exists){infoJugador = doc.data(); console.log(infoJugador);callback(infoJugador);}
      else{alert("Problemas de conexion, verficar nombre contrincante")}
    });
  }