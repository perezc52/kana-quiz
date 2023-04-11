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
            <h2 className="option-heading">Hiragana</h2>
                <div className="checkbox-container">
                    <label for="plainHiragana">
                        <input
                            type="checkbox"
                            id="plainHiragana"
                            name="plainHiragana"
                            checked={checkedItems.plainHiragana}
                            onChange={handleChange}
                        />
                        Basic
                    </label>
                    <label for="dakuonHiragana">
                        <input
                            type="checkbox"
                            id="dakuonHiragana"
                            name="dakuonHiragana"
                            checked={checkedItems.dakuonHiragana}
                            onChange={handleChange}
                        />
                        Dakuon
                    </label>
                    <label for="comboHiragana">
                        <input
                            type="checkbox"
                            id="comboHiragana"
                            name="comboHiragana"
                            checked={checkedItems.comboHiragana}
                            onChange={handleChange}
                        />
                        Handakuon
                    </label>
                </div>
            <h2 className="option-heading">Katakana</h2>
            <div className="checkbox-container">
                <label for="plainKatakana">
                    <input
                        type="checkbox"
                        id="plainKatakana"
                        name="plainKatakana"
                        checked={checkedItems.plainKatakana}
                        onChange={handleChange}
                    />
                    Basic
                </label>
                <label for="dakuonKatakana">
                    <input
                        type="checkbox"
                        id="dakuonKatakana"
                        name="dakuonKatakana"
                        checked={checkedItems.dakuonKatakana}
                        onChange={handleChange}
                    />
                    Dakuon
                </label>
                <label for="comboKatakana">
                    <input
                        type="checkbox"
                        id="comboKatakana"
                        name="comboKatakana"
                        checked={checkedItems.comboKatakana}
                        onChange={handleChange}
                    />
                    Handakuon
                </label>
            </div>
            <button disabled={Object.values(checkedItems).every(el => el === false)} className="apply btn" type="submit">Apply</button>
        </fieldset>
      </form>
    )
  }

  export default Options
