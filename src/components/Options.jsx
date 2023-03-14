import { useState } from "react"
import { kana } from "../data"

function Options(props) {
    const [checkedItems, setCheckedItems] = useState(
        {
            plainHiragana: true,
            dakuonHiragana: false,
            comboHiragana: false,
            plainKatakana: false,
            dakuonKatakana: false,
            comboKatakana: false,
        }
    )

    function handleChange(event) {
        const {name, checked} = event.target
        setCheckedItems(prevItems => ({...prevItems, [name]: checked}))
    }

    function handleSubmit(event) {
        event.preventDefault()
        const categories = []
        for(let property in checkedItems) {
            if(checkedItems[property]) {
                categories.push(property)
            }
        }
        const filtered = kana.filter(el => categories.includes(el.cat))
        props.onFilter(filtered)
    }

    return (
      <form onSubmit={handleSubmit} className="options">
        <fieldset>
            <legend>Select what you want to practice</legend>
            <h2>Hiragana</h2>
                <label>
                    <input
                        type="checkbox"
                        name="plainHiragana"
                        checked={checkedItems.plainHiragana}
                        onChange={handleChange}
                    />
                    Plain
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="dakuonHiragana"
                        checked={checkedItems.dakuonHiragana}
                        onChange={handleChange}
                    />
                    Dakuon
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="comboHiragana"
                        checked={checkedItems.comboHiragana}
                        onChange={handleChange}
                    />
                    Combo
                </label>
            <h2>Katakana</h2>
                <label>
                    <input
                        type="checkbox"
                        name="plainKatakana"
                        checked={checkedItems.plainKatakana}
                        onChange={handleChange}
                    />
                    Plain
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="dakuonKatakana"
                        checked={checkedItems.dakuonKatakana}
                        onChange={handleChange}
                    />
                    Dakuon
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="comboKatakana"
                        checked={checkedItems.comboKatakana}
                        onChange={handleChange}
                    />
                    Combo
                </label>
            <button type="submit">Apply</button>
        </fieldset>
      </form>
    )
  }

  export default Options
