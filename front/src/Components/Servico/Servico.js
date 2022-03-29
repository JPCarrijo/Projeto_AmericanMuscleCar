// import React from "react";
// import Nav from '../../img/nav.jpg';
// import TextField from '@material-ui/core/TextField';
// import { FormLabel, Radio, RadioGroup, FormControlLabel, Checkbox } from "@material-ui/core";
// import placa from '../../img/PlacaMercosulHeader.png'


// export default function Servico() {

//   return (
//     <>
//       <nav className="navbar navbar-expand-lg navbar-light " style={{ background: 'linear-gradient(96deg, rgba(126,128,108,0.9948354341736695) 12%, rgba(98,98,69,1) 50%, rgba(30,33,30,1) 93%)' }}>
//         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="...">
//           <span class="navbar-toggler-icon" style={{ border: '1px solid' }}></span>
//         </button>
//         <a class="navbar-brand" href="#" > <img src={Nav} alt="" width="170" height="80" className="d-inline-block align-text-end " style={{ marginRight: '1vw' }} /> </a>
//         <div className="collapse navbar-collapse " id="navbarTogglerDemo01" style={{ color: ' rgba(212, 255, 244, 0.58)', fontFamily: 'Permanent Marker', fontSize: '35pt' }}>  American Musclecar
//         </div>
//       </nav>
//       <section className="container-fluid" >
//         <div className="container-{breakpoint}">
//           <div className="row">
//             <div role="complementary" className="col-md-1 bg-secondary" style={{
//               background: 'linear-gradient(0deg, rgba(33,33,30,1) 0%, rgba(126,128,108,0.9948354341736695) 70%)'
//             }}>
//             </div>
//             <div role="main" className="col-md-10" style={{ backgroundColor: 'rgba(207, 206, 206, 0.93)', height: '100%' }}>
//               <div className="col-md-12" style={{ paddingTop: '1vh', paddingLeft: '1.3vw' }}>
//                 <h5 style={{ fontSize: '17pt', fontWeight: '700' }}> Ordem de Serviços </h5>
//               </div>
//               <div className="row container-fluid" style={{ marginLeft: '0.04vw' }}>
//                 <div className="col-md-5" style={{ border: '1px ridge black' }}>
//                   <div className="row" style={{ marginTop: '1.5vh' }}>
//                     <div className="col-md-5">
//                       <TextField
//                         id="ordem"
//                         label="Nº da Ordem"
//                         name="input"
//                         variant="standard"
//                       //value={}
//                       //onChange={handleInputChange}
//                       //fullWidth
//                       //required
//                       //error={error.nome !== ''}
//                       //helperText={error.nome} style={{ fontStyle: '20pt' }} 
//                       />
//                     </div>
//                     <div className="col-md-5">
//                       <TextField
//                         id="entrada"
//                         label="Data Entrada"
//                         name="input"
//                         variant="standard"
//                       //value={}
//                       //onChange={handleInputChange}
//                       //fullWidth
//                       //required
//                       //error={error.nome !== ''}
//                       //helperText={error.nome} style={{ fontStyle: '20pt' }} 
//                       />
//                     </div>
//                     <div className="col-md-2">
//                       <FormLabel component="legend"> 1 via </FormLabel>
//                       <RadioGroup
//                         aria-label="gender"
//                         defaultValue="umaVia"
//                         name="radio-buttons-group">
//                         <FormControlLabel value="umaVia" control={<Radio />} label="" />
//                       </RadioGroup>
//                     </div>
//                     <div className="col-md-5">
//                       <FormControlLabel control={<Checkbox />} label="Ordem Serviço" />
//                       <FormControlLabel control={<Checkbox />} label="Orçamento" />
//                     </div>
//                     <div className="col-md-5">
//                       <TextField
//                         id="entrada"
//                         label="Data Entrada"
//                         name="input"
//                         variant="standard"
//                       //value={}
//                       //onChange={handleInputChange}
//                       //fullWidth
//                       //required
//                       //error={error.nome !== ''}
//                       //helperText={error.nome} style={{ fontStyle: '20pt' }} 
//                       />
//                     </div>
//                     <div className="col-md-2">
//                       <FormLabel component="legend"> 2 vias </FormLabel>
//                       <RadioGroup
//                         aria-label="gender"
//                         defaultValue="duasVias"
//                         name="radio-buttons-group">
//                         <FormControlLabel value="duasVias" control={<Radio />} label="" />
//                       </RadioGroup>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-md-7" style={{ border: '1px ridge black' }}>
//                   <div classname="row">
//                     <div className="col-md-12" style={{ marginTop: '4vh' }}>
//                       <TextField
//                         id="entrada"
//                         label="Cliente"
//                         name="input"
//                         variant="standard"
//                         //value={}
//                         //onChange={handleInputChange}
//                         fullWidth
//                       //required
//                       //error={error.nome !== ''}
//                       //helperText={error.nome} style={{ fontStyle: '20pt' }} 
//                       />
//                     </div>
//                     <div className="col-md-4" style={{ marginTop: '2vh' }}>
//                       <button type="button" className="btn btn-secondary"> Pesquisar Cliente </button>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-md-12" style={{ height: '1vh' }} ></div>
//                 <div className="col-md-12" style={{ border: '1px ridge black' }}>
//                   <div className="row">
//                     <div className="col-md-3">
//                       {/*<div className="col-md-7">*/}
//                       <TextField
//                         id="inputPlaca"
//                         label="Placa"
//                         name="input"
//                         variant="standard"
//                       //value={}
//                       //onChange={handleInputChange}
//                       //fullWidth
//                       //required
//                       //error={error.nome !== ''}
//                       //helperText={error.nome} style={{ fontStyle: '20pt' }} 
//                       />
//                       {/*</div>*/}
//                       {/*<div className="col-md-5">*/}
//                       <button className="btn btn-sm" style={{ backgroundColor: 'transparent' }}>
//                         <i className="fa fa-pencil" height="15vh"><p>Pesquisa Placa</p><img src={placa} height="15vh" style={{ marginTop: '-3vh' }} /></i>
//                       </button>
//                       {/*</div>*/}
//                     </div>
//                     <div className="col-md-2">
//                       {/*<div className="col-md-7">*/}
//                       <TextField
//                         id="inputMarca"
//                         label="Marca"
//                         name="input"
//                         variant="standard"
//                         //value={}
//                         //onChange={handleInputChange}
//                         fullWidth
//                       //required
//                       //error={error.nome !== ''}
//                       //helperText={error.nome} style={{ fontStyle: '20pt' }} 
//                       />
//                     </div>
//                     <div className="col-md-3">
//                       {/*<div className="col-md-7">*/}
//                       <TextField
//                         id="inputModelo"
//                         label="Modelo"
//                         name="input"
//                         variant="standard"
//                         //value={}
//                         //onChange={handleInputChange}
//                         fullWidth
//                       //required
//                       //error={error.nome !== ''}
//                       //helperText={error.nome} style={{ fontStyle: '20pt' }} 
//                       />
//                     </div>
//                     <div className="col-md-2">
//                       {/*<div className="col-md-7">*/}
//                       <TextField
//                         id="inputAno"
//                         label="Ano"
//                         name="input"
//                         variant="standard"
//                         //value={}
//                         //onChange={handleInputChange}
//                         fullWidth
//                       //required
//                       //error={error.nome !== ''}
//                       //helperText={error.nome} style={{ fontStyle: '20pt' }} 
//                       />
//                     </div>
//                     <div className="col-md-2">
//                       {/*<div className="col-md-7">*/}
//                       <TextField
//                         id="inputKm"
//                         label="KM"
//                         name="input"
//                         variant="standard"
//                         //value={}
//                         //onChange={handleInputChange}
//                         fullWidth
//                       //required
//                       //error={error.nome !== ''}
//                       //helperText={error.nome} style={{ fontStyle: '20pt' }} 
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-md-12" style={{ height: '1vh' }} ></div>
//                 <div className="col-md-9" style={{ border: '1px ridge black' }}>
//                   <h5 className="text-md-center"> Descrições </h5>
//                 </div>
//                 <div className="col-md-1" style={{ border: '1px ridge black' }}>
//                   <h5 className="text-md-center"> Valor Unit.</h5>
//                 </div>
//                 <div className="col-md-1" style={{ border: '1px ridge black' }}>
//                   <h5 className="text-md-center"> Quant. </h5>
//                 </div>
//                 <div className="col-md-1" style={{ border: '1px ridge black' }}>
//                   <h5 className="text-md-center"> Valor Total</h5>
//                 </div>
//                 <div className="col-md-9" style={{ border: '1px ridge black' }}>
//                   <TextField
//                     id="descricao1"
//                     name="descricao1"
//                     variant="standard"
//                     //value={}
//                     //onChange={handleInputChange}
//                     fullWidth
//                   //required
//                   //error={error.nome !== ''}
//                   //helperText={error.nome} style={{ fontStyle: '20pt' }} 
//                   />
//                 </div>
//                 <div className="col-md-1" style={{ border: '1px ridge black' }}>
//                   <TextField
//                     id="unitario1"
//                     name="unitario1"
//                     variant="standard"
//                     //value={}
//                     //onChange={handleInputChange}
//                     fullWidth
//                   //required
//                   //error={error.nome !== ''}
//                   //helperText={error.nome} style={{ fontStyle: '20pt' }} 
//                   />
//                 </div>
//                 <div className="col-md-1" style={{ border: '1px ridge black' }}>
//                   <TextField
//                     id="quantidade1"
//                     name="quantidade1"
//                     variant="standard"
//                     //value={}
//                     //onChange={handleInputChange}
//                     fullWidth
//                   //required
//                   //error={error.nome !== ''}
//                   //helperText={error.nome} style={{ fontStyle: '20pt' }} 
//                   />
//                 </div>
//                 <div className="col-md-1" style={{ border: '1px ridge black' }}>
//                   <TextField
//                     id="total1"
//                     name="total1"
//                     variant="standard"
//                     //value={}
//                     //onChange={handleInputChange}
//                     fullWidth
//                   //required
//                   //error={error.nome !== ''}
//                   //helperText={error.nome} style={{ fontStyle: '20pt' }} 
//                   />
//                 </div>
//                 <div className="col-md-9" style={{ border: '1px ridge black' }}>
//                   <TextField
//                     id="descricao1"
//                     name="descricao1"
//                     variant="standard"
//                     //value={}
//                     //onChange={handleInputChange}
//                     fullWidth
//                   //required
//                   //error={error.nome !== ''}
//                   //helperText={error.nome} style={{ fontStyle: '20pt' }} 
//                   />
//                 </div>
//                 <div className="col-md-1" style={{ border: '1px ridge black' }}>
//                   <TextField
//                     id="unitario1"
//                     name="unitario1"
//                     variant="standard"
//                     //value={}
//                     //onChange={handleInputChange}
//                     fullWidth
//                   //required
//                   //error={error.nome !== ''}
//                   //helperText={error.nome} style={{ fontStyle: '20pt' }} 
//                   />
//                 </div>
//                 <div className="col-md-1" style={{ border: '1px ridge black' }}>
//                   <TextField
//                     id="quantidade1"
//                     name="quantidade1"
//                     variant="standard"
//                     //value={}
//                     //onChange={handleInputChange}
//                     fullWidth
//                   //required
//                   //error={error.nome !== ''}
//                   //helperText={error.nome} style={{ fontStyle: '20pt' }} 
//                   />
//                 </div>
//                 <div className="col-md-1" style={{ border: '1px ridge black' }}>
//                   <TextField
//                     id="total1"
//                     name="total1"
//                     variant="standard"
//                     //value={}
//                     //onChange={handleInputChange}
//                     fullWidth
//                   //required
//                   //error={error.nome !== ''}
//                   //helperText={error.nome} style={{ fontStyle: '20pt' }} 
//                   />
//                 </div>
//                 <div className="col-md-9" style={{ border: '1px ridge black' }}>
//                   <TextField
//                     id="descricao1"
//                     name="descricao1"
//                     variant="standard"
//                     //value={}
//                     //onChange={handleInputChange}
//                     fullWidth
//                   //required
//                   //error={error.nome !== ''}
//                   //helperText={error.nome} style={{ fontStyle: '20pt' }} 
//                   />
//                 </div>
//                 <div className="col-md-1" style={{ border: '1px ridge black' }}>
//                   <TextField
//                     id="unitario1"
//                     name="unitario1"
//                     variant="standard"
//                     //value={}
//                     //onChange={handleInputChange}
//                     fullWidth
//                   //required
//                   //error={error.nome !== ''}
//                   //helperText={error.nome} style={{ fontStyle: '20pt' }} 
//                   />
//                 </div>
//                 <div className="col-md-1" style={{ border: '1px ridge black' }}>
//                   <TextField
//                     id="quantidade1"
//                     name="quantidade1"
//                     variant="standard"
//                     //value={}
//                     //onChange={handleInputChange}
//                     fullWidth
//                   //required
//                   //error={error.nome !== ''}
//                   //helperText={error.nome} style={{ fontStyle: '20pt' }} 
//                   />
//                 </div>
//                 <div className="col-md-1" style={{ border: '1px ridge black' }}>
//                   <TextField
//                     id="total1"
//                     name="total1"
//                     variant="standard"
//                     //value={}
//                     //onChange={handleInputChange}
//                     fullWidth
//                   //required
//                   //error={error.nome !== ''}
//                   //helperText={error.nome} style={{ fontStyle: '20pt' }} 
//                   />
//                 </div>
//                 <div className="col-md-9" style={{ border: '1px ridge black' }}>
//                   <TextField
//                     id="descricao1"
//                     name="descricao1"
//                     variant="standard"
//                     //value={}
//                     //onChange={handleInputChange}
//                     fullWidth
//                   //required
//                   //error={error.nome !== ''}
//                   //helperText={error.nome} style={{ fontStyle: '20pt' }} 
//                   />
//                 </div>
//                 <div className="col-md-1" style={{ border: '1px ridge black' }}>
//                   <TextField
//                     id="unitario1"
//                     name="unitario1"
//                     variant="standard"
//                     //value={}
//                     //onChange={handleInputChange}
//                     fullWidth
//                   //required
//                   //error={error.nome !== ''}
//                   //helperText={error.nome} style={{ fontStyle: '20pt' }} 
//                   />
//                 </div>
//                 <div className="col-md-1" style={{ border: '1px ridge black' }}>
//                   <TextField
//                     id="quantidade1"
//                     name="quantidade1"
//                     variant="standard"
//                     //value={}
//                     //onChange={handleInputChange}
//                     fullWidth
//                   //required
//                   //error={error.nome !== ''}
//                   //helperText={error.nome} style={{ fontStyle: '20pt' }} 
//                   />
//                 </div>
//                 <div className="col-md-1" style={{ border: '1px ridge black' }}>
//                   <TextField
//                     id="total1"
//                     name="total1"
//                     variant="standard"
//                     //value={}
//                     //onChange={handleInputChange}
//                     fullWidth
//                   //required
//                   //error={error.nome !== ''}
//                   //helperText={error.nome} style={{ fontStyle: '20pt' }} 
//                   />
//                 </div>
//                 <div className="col-md-9" style={{ border: '1px ridge black' }}>
//                   <TextField
//                     id="descricao1"
//                     name="descricao1"
//                     variant="standard"
//                     //value={}
//                     //onChange={handleInputChange}
//                     fullWidth
//                   //required
//                   //error={error.nome !== ''}
//                   //helperText={error.nome} style={{ fontStyle: '20pt' }} 
//                   />
//                 </div>
//                 <div className="col-md-1" style={{ border: '1px ridge black' }}>
//                   <TextField
//                     id="unitario1"
//                     name="unitario1"
//                     variant="standard"
//                     //value={}
//                     //onChange={handleInputChange}
//                     fullWidth
//                   //required
//                   //error={error.nome !== ''}
//                   //helperText={error.nome} style={{ fontStyle: '20pt' }} 
//                   />
//                 </div>
//                 <div className="col-md-1" style={{ border: '1px ridge black' }}>
//                   <TextField
//                     id="quantidade1"
//                     name="quantidade1"
//                     variant="standard"
//                     //value={}
//                     //onChange={handleInputChange}
//                     fullWidth
//                   //required
//                   //error={error.nome !== ''}
//                   //helperText={error.nome} style={{ fontStyle: '20pt' }} 
//                   />
//                 </div>
//                 <div className="col-md-1" style={{ border: '1px ridge black' }}>
//                   <TextField
//                     id="total1"
//                     name="total1"
//                     variant="standard"
//                     //value={}
//                     //onChange={handleInputChange}
//                     fullWidth
//                   //required
//                   //error={error.nome !== ''}
//                   //helperText={error.nome} style={{ fontStyle: '20pt' }} 
//                   />
//                 </div>
//                 <div className="col-md-9" style={{ border: '1px ridge black' }}>
//                   <TextField
//                     id="descricao1"
//                     name="descricao1"
//                     variant="standard"
//                     //value={}
//                     //onChange={handleInputChange}
//                     fullWidth
//                   //required
//                   //error={error.nome !== ''}
//                   //helperText={error.nome} style={{ fontStyle: '20pt' }} 
//                   />
//                 </div>
//                 <div className="col-md-1" style={{ border: '1px ridge black' }}>
//                   <TextField
//                     id="unitario1"
//                     name="unitario1"
//                     variant="standard"
//                     //value={}
//                     //onChange={handleInputChange}
//                     fullWidth
//                   //required
//                   //error={error.nome !== ''}
//                   //helperText={error.nome} style={{ fontStyle: '20pt' }} 
//                   />
//                 </div>
//                 <div className="col-md-1" style={{ border: '1px ridge black' }}>
//                   <TextField
//                     id="quantidade1"
//                     name="quantidade1"
//                     variant="standard"
//                     //value={}
//                     //onChange={handleInputChange}
//                     fullWidth
//                   //required
//                   //error={error.nome !== ''}
//                   //helperText={error.nome} style={{ fontStyle: '20pt' }} 
//                   />
//                 </div>
//                 <div className="col-md-1" style={{ border: '1px ridge black' }}>
//                   <TextField
//                     id="total1"
//                     name="total1"
//                     variant="standard"
//                     //value={}
//                     //onChange={handleInputChange}
//                     fullWidth
//                   //required
//                   //error={error.nome !== ''}
//                   //helperText={error.nome} style={{ fontStyle: '20pt' }} 
//                   />
//                 </div>
//                 <div className="col-md-9" style={{ border: '1px ridge black' }}>
//                   <TextField
//                     id="descricao1"
//                     name="descricao1"
//                     variant="standard"
//                     //value={}
//                     //onChange={handleInputChange}
//                     fullWidth
//                   //required
//                   //error={error.nome !== ''}
//                   //helperText={error.nome} style={{ fontStyle: '20pt' }} 
//                   />
//                 </div>
//                 <div className="col-md-1" style={{ border: '1px ridge black' }}>
//                   <TextField
//                     id="unitario1"
//                     name="unitario1"
//                     variant="standard"
//                     //value={}
//                     //onChange={handleInputChange}
//                     fullWidth
//                   //required
//                   //error={error.nome !== ''}
//                   //helperText={error.nome} style={{ fontStyle: '20pt' }} 
//                   />
//                 </div>
//                 <div className="col-md-1" style={{ border: '1px ridge black' }}>
//                   <TextField
//                     id="quantidade1"
//                     name="quantidade1"
//                     variant="standard"
//                     //value={}
//                     //onChange={handleInputChange}
//                     fullWidth
//                   //required
//                   //error={error.nome !== ''}
//                   //helperText={error.nome} style={{ fontStyle: '20pt' }} 
//                   />
//                 </div>
//                 <div className="col-md-1" style={{ border: '1px ridge black' }}>
//                   <TextField
//                     id="total1"
//                     name="total1"
//                     variant="standard"
//                     //value={}
//                     //onChange={handleInputChange}
//                     fullWidth
//                   //required
//                   //error={error.nome !== ''}
//                   //helperText={error.nome} style={{ fontStyle: '20pt' }} 
//                   />
//                 </div>
//                 <div className="col-md-9" style={{ border: '1px ridge black' }}>
//                   <TextField
//                     id="descricao1"
//                     name="descricao1"
//                     variant="standard"
//                     //value={}
//                     //onChange={handleInputChange}
//                     fullWidth
//                   //required
//                   //error={error.nome !== ''}
//                   //helperText={error.nome} style={{ fontStyle: '20pt' }} 
//                   />
//                 </div>
//                 <div className="col-md-1" style={{ border: '1px ridge black' }}>
//                   <TextField
//                     id="unitario1"
//                     name="unitario1"
//                     variant="standard"
//                     //value={}
//                     //onChange={handleInputChange}
//                     fullWidth
//                   //required
//                   //error={error.nome !== ''}
//                   //helperText={error.nome} style={{ fontStyle: '20pt' }} 
//                   />
//                 </div>
//                 <div className="col-md-1" style={{ border: '1px ridge black' }}>
//                   <TextField
//                     id="quantidade1"
//                     name="quantidade1"
//                     variant="standard"
//                     //value={}
//                     //onChange={handleInputChange}
//                     fullWidth
//                   //required
//                   //error={error.nome !== ''}
//                   //helperText={error.nome} style={{ fontStyle: '20pt' }} 
//                   />
//                 </div>
//                 <div className="col-md-1" style={{ border: '1px ridge black' }}>
//                   <TextField
//                     id="total1"
//                     name="total1"
//                     variant="standard"
//                     //value={}
//                     //onChange={handleInputChange}
//                     fullWidth
//                   //required
//                   //error={error.nome !== ''}
//                   //helperText={error.nome} style={{ fontStyle: '20pt' }} 
//                   />
//                 </div>
//                 <div className="col-md-9" style={{ border: '1px ridge black' }}>
//                   <TextField
//                     id="descricao1"
//                     name="descricao1"
//                     variant="standard"
//                     //value={}
//                     //onChange={handleInputChange}
//                     fullWidth
//                   //required
//                   //error={error.nome !== ''}
//                   //helperText={error.nome} style={{ fontStyle: '20pt' }} 
//                   />
//                 </div>
//                 <div className="col-md-1" style={{ border: '1px ridge black' }}>
//                   <TextField
//                     id="unitario1"
//                     name="unitario1"
//                     variant="standard"
//                     //value={}
//                     //onChange={handleInputChange}
//                     fullWidth
//                   //required
//                   //error={error.nome !== ''}
//                   //helperText={error.nome} style={{ fontStyle: '20pt' }} 
//                   />
//                 </div>
//                 <div className="col-md-1" style={{ border: '1px ridge black' }}>
//                   <TextField
//                     id="quantidade1"
//                     name="quantidade1"
//                     variant="standard"
//                     //value={}
//                     //onChange={handleInputChange}
//                     fullWidth
//                   //required
//                   //error={error.nome !== ''}
//                   //helperText={error.nome} style={{ fontStyle: '20pt' }} 
//                   />
//                 </div>
//                 <div className="col-md-1" style={{ border: '1px ridge black' }}>
//                   <TextField
//                     id="total1"
//                     name="total1"
//                     variant="standard"
//                     //value={}
//                     //onChange={handleInputChange}
//                     fullWidth
//                   //required
//                   //error={error.nome !== ''}
//                   //helperText={error.nome} style={{ fontStyle: '20pt' }} 
//                   />
//                 </div>
//                 <div className="col-md-9" style={{ border: '1px ridge black' }}>
//                   <TextField
//                     id="descricao1"
//                     name="descricao1"
//                     variant="standard"
//                     //value={}
//                     //onChange={handleInputChange}
//                     fullWidth
//                   //required
//                   //error={error.nome !== ''}
//                   //helperText={error.nome} style={{ fontStyle: '20pt' }} 
//                   />
//                 </div>
//                 <div className="col-md-1" style={{ border: '1px ridge black' }}>
//                   <TextField
//                     id="unitario1"
//                     name="unitario1"
//                     variant="standard"
//                     //value={}
//                     //onChange={handleInputChange}
//                     fullWidth
//                   //required
//                   //error={error.nome !== ''}
//                   //helperText={error.nome} style={{ fontStyle: '20pt' }} 
//                   />
//                 </div>
//                 <div className="col-md-1" style={{ border: '1px ridge black' }}>
//                   <TextField
//                     id="quantidade1"
//                     name="quantidade1"
//                     variant="standard"
//                     //value={}
//                     //onChange={handleInputChange}
//                     fullWidth
//                   //required
//                   //error={error.nome !== ''}
//                   //helperText={error.nome} style={{ fontStyle: '20pt' }} 
//                   />
//                 </div>
//                 <div className="col-md-1" style={{ border: '1px ridge black' }}>
//                   <TextField
//                     id="total1"
//                     name="total1"
//                     variant="standard"
//                     //value={}
//                     //onChange={handleInputChange}
//                     fullWidth
//                   //required
//                   //error={error.nome !== ''}
//                   //helperText={error.nome} style={{ fontStyle: '20pt' }} 
//                   />
//                 </div>
//                 <div className="col-md-12">
//                 </div>
//                 <div className="col-md-9" style={{ border: '1px ridge black' }}>
//                   <h3 className="text-end"> Soma </h3>
//                 </div>
//                 <div className="col-md-1" style={{ border: '1px ridge black' }}>
//                   <TextField
//                     id="unitario1"
//                     name="unitario1"
//                     variant="standard"
//                     //value={}
//                     //onChange={handleInputChange}
//                     fullWidth
//                   //required
//                   //error={error.nome !== ''}
//                   //helperText={error.nome} style={{ fontStyle: '20pt' }} 
//                   />
//                 </div>
//                 <div className="col-md-1" style={{ border: '1px ridge black' }}>
//                   <TextField
//                     id="quantidade1"
//                     name="quantidade1"
//                     variant="standard"
//                     //value={}
//                     //onChange={handleInputChange}
//                     fullWidth
//                   //required
//                   //error={error.nome !== ''}
//                   //helperText={error.nome} style={{ fontStyle: '20pt' }} 
//                   />
//                 </div>
//                 <div className="col-md-1" style={{ border: '1px ridge black' }}>
//                   <TextField
//                     id="total1"
//                     name="total1"
//                     variant="standard"
//                     //value={}
//                     //onChange={handleInputChange}
//                     fullWidth
//                   //required
//                   //error={error.nome !== ''}
//                   //helperText={error.nome} style={{ fontStyle: '20pt' }} 
//                   />
//                 </div>
//                 <div className="col-md-12" style={{ height: '1vh' }} ></div>
//                 <div className="col-md-9" style={{ border: '1px ridge black', paddingTop: '2vh', paddingBotton: '2vh' }}>
//                 </div>
//                 <div className="col-md-3" style={{ border: '1px ridge black', paddingTop: '2vh', paddingBotton: '2vh' }}>
//                   <div className="col-md-12">
//                     <FormLabel component="legend"  alignText="center"> Formas de Pagamento </FormLabel>
//                     <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
//                       <FormControlLabel value="vista" control={<Radio />} label="Dinheiro" />
//                       <FormControlLabel value="cartao" control={<Radio />} label="Cartão" />
//                       <FormControlLabel value="boleto" control={<Radio />} label="Boleto" />
//                     </RadioGroup>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div role="complementary" className="col-md-1 bg-secondary" style={{
//               background: 'linear-gradient(0deg, rgba(116,128,108,0.998354341736695) 0%, rgba(33,33,30,1) 90% )'
//             }}>
//             </div>
//           </div>
//         </div>
//       </section >
//     </>
//   )
// }