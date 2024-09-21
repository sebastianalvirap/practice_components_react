export const MyFirstComponent = () => {

    const name = "Inés María Oliveros";
  
    const github_profile = "https://github.com/inesmariao";
  
    const student = {
      name: "Sebastian ",
      last_name: "Alvira",
      mobile: "300000000",
      linkedin_profile: "https://www.linkedin.com/in/juan-sebastian-alvira-230252139/"
    };
  
    return (
      <>
        <div>MyFirstComponent</div>
          <h1>Temas de React</h1>
          <ul>
              <li>Componentes</li>
              <li>Eventos</li>
              <li>Estados Hooks</li>
              <li>Props</li>
          </ul>
        
        
          <h1>Datos del Docente</h1>
          <p>Nombre: <strong>{ name }</strong></p>
          <p>GitHub: { github_profile } </p>
      

          <h1>Datos del Estudiante</h1>
          <p>Nombre: <strong>{ student.name }</strong></p>
          <p>Apellido: { student.last_name } </p>
          <p>Celular: { student.mobile } </p>
          <p>LinkedIn: <a href={ student.linkedin_profile }>{ student.linkedin_profile }</a> </p>
    
        <div>
          <h1>Objeto Completo</h1>
          <pre>{JSON.stringify(student)} </pre>
        </div>
      </>
    )
  }