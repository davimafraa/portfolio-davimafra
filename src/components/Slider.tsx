function Slider() {
  return (
    <>
        <section id="second-container">
            <div id="sc-1half">
                <h3 className="head-text">SEE ALL</h3>
                <h1 className="neck-text">SELECTED PROJECTS —</h1>
            </div>
            <div id="sc-2half">
                <img className="item" src="/public/grid1.jpeg" alt="Projeto 1"/>
                <img className="item" src="/public/grid2.jpeg" alt="Projeto 2"/>
                <img className="item" src="/public/grid3.jpeg" alt="Projeto 3"/>
                <img className="item" src="/public/grid4.jpeg" alt="Projeto 4"/>
                <img className="item" src="/public/grid5.jpeg" alt="Projeto 5"/>
                <img className="item" src="/public/grid6.jpeg" alt="Projeto 6"/>
                <img className="item" src="/public/grid7.jpeg" alt="Projeto 7"/>
                <img className="item" src="/public/grid8.jpeg" alt="Projeto 8"/>
                <img className="item" src="/public/grid9.jpeg" alt="Projeto 9"/>
            </div>
            <div id="sc-3half">
                <button id="left-arrow" className="controls">◀</button>
                <button id="right-arrow" className="controls">▶</button>
            </div>
        </section>
    </>
  )
}

export default Slider
