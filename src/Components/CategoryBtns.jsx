const OLLCategoryBtns = ({setCategory, category}) => {
    return (
        <>
            <form className="radio-inputs">
            <label onClick={(e) => setCategory(e.target.getAttribute('for'))} className="radio" id="mobile" >
                <input type="radio" name="radio" htmlFor="All" defaultChecked/>
                <span className="name">All</span>
            </label>
            <label onClick={(e) => setCategory(e.target.getAttribute('for'))} className="radio" id="mobile">
                <input type="radio" name="radio" htmlFor="Solved Cross"/>
                <span className="name">Solved Cross</span>
            </label>
            <label onClick={(e) => setCategory(e.target.getAttribute('for'))} className="radio" id="laptop">
                <input type="radio" name="radio" htmlFor="T" />
                <span className="name">T's</span>
            </label>
            <label onClick={(e) => setCategory(e.target.getAttribute('for'))} className="radio" id="tv">
                <input type="radio" name="radio" htmlFor="Block" />
                <span className="name">Blocks</span>
            </label>
            <label onClick={(e) => setCategory(e.target.getAttribute('for'))} className="radio" id="gaming">
                <input type="radio" name="radio" htmlFor="Edges Only" />
                <span className="name">Edges Only</span>
            </label>
            <label onClick={(e) => setCategory(e.target.getAttribute('for'))} className="radio" id="appliances">
                <input type="radio" name="radio" htmlFor="Lightning" />
                <span className="name">Lightnings</span>
            </label>
            <label onClick={(e) => setCategory(e.target.getAttribute('for'))} className="radio" id="audio">
                <input type="radio" name="radio" htmlFor="P" />
                <span className="name">P's</span>
            </label>
            <label onClick={(e) => setCategory(e.target.getAttribute('for'))} className="radio" id="audio">
                <input type="radio" name="radio" htmlFor="C" />
                <span className="name">C's</span>
            </label>
            <label onClick={(e) => setCategory(e.target.getAttribute('for'))} className="radio" id="audio">
                <input type="radio" name="radio" htmlFor="Fish" />
                <span className="name">Fishes</span>
            </label>
            <label onClick={(e) => setCategory(e.target.getAttribute('for'))} className="radio" id="audio">
                <input type="radio" name="radio" htmlFor="Hook" />
                <span className="name">Hooks</span>
            </label>
            <label onClick={(e) => setCategory(e.target.getAttribute('for'))} className="radio" id="audio">
                <input type="radio" name="radio" htmlFor="W" />
                <span className="name">W's</span>
            </label>
            <label onClick={(e) => setCategory(e.target.getAttribute('for'))} className="radio" id="audio">
                <input type="radio" name="radio" htmlFor="Line" />
                <span className="name">Lines</span>
            </label>
            <label onClick={(e) => setCategory(e.target.getAttribute('for'))} className="radio" id="audio">
                <input type="radio" name="radio" htmlFor="Awkward" />
                <span className="name">Awkward Shaped</span>
            </label>
            <label onClick={(e) => setCategory(e.target.getAttribute('for'))} className="radio" id="audio">
                <input type="radio" name="radio" htmlFor="Dot" />
                <span className="name">Dot Cases</span>
            </label>
            </form>
        </>
    )
}

const PLLCategoryBtns = ({setCategory, category}) => {
    return (
        <>
            <form className="radio-inputs">
            <label onClick={(e) => setCategory(e.target.getAttribute('for'))} className="radio" id="mobile">
                <input type="radio" name="radio" htmlFor="All" />
                <span className="name">All</span>
            </label>
            <label onClick={(e) => setCategory(e.target.getAttribute('for'))} className="radio" id="mobile">
                <input type="radio" name="radio" htmlFor="Edges Only" />
                <span className="name">Edges Only</span>
            </label>
            <label onClick={(e) => setCategory(e.target.getAttribute('for'))} className="radio" id="laptop">
                <input type="radio" name="radio" htmlFor="Corners Only" />
                <span className="name">Corners Only</span>
            </label>
            <label onClick={(e) => setCategory(e.target.getAttribute('for'))} className="radio" id="tv">
                <input type="radio" name="radio" htmlFor="Adjacent Swap" />
                <span className="name">Adjacent Swap</span>
            </label>
            <label onClick={(e) => setCategory(e.target.getAttribute('for'))} className="radio" id="gaming">
                <input type="radio" name="radio" htmlFor="Diagonal Swap" />
                <span className="name">Diagonal Swap</span>
            </label>
            <label onClick={(e) => setCategory(e.target.getAttribute('for'))} className="radio" id="appliances">
                <input type="radio" name="radio" htmlFor="G-Perms" />
                <span className="name">G-Perms</span>
            </label>
           </form>
        </>
    )
}

export  {OLLCategoryBtns, PLLCategoryBtns}
