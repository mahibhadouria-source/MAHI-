function Skills({skills}) {
  return (
    <section id="skills" className="section dark-section">
      <div className="container">
        <h2 className="section-title">My<span className="gradient-text">Skills</span></h2>

        <div className="grid">
          {
            skills.map((group)=>(
               < div className="card" key={group.category}>
        
           <h3>{group.category}</h3>
            <div div className="badges">
              {
                group.items.map((items)=>(
                   <span className="badge" key={items}>{items}</span>
                ))
              }

              
          </div>
          </div>
            ))
          }
            </div>
</div>
    </section>
  );
}

export default Skills;