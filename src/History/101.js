function History(){
    const x = 100;
    var y = 20;
    y=3;
    var arrayDemo = ["sarith","saroth","sarey","saro"];
    return(
        
        <div className='head'>
          <h2>{x+"100"}</h2>
          <h2>{y}</h2>
          <h3>{arrayDemo.length}</h3>
          {arrayDemo.map((item,index)=>{
            return(
                <div>{index+1} {item}</div>
            );
          })}
          <h3>Hello World</h3>
          <h5 style={{color:'blue'}}>My first React</h5>
      </div>
    );
}
export default History;