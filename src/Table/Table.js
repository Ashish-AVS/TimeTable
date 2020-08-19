import React, { Component } from 'react';
import classes from './Table.module.css';
import Card from '../Card/Card';
import DropDown from '../DropDown/DropDown';

class Table extends Component {

  render() {
		return (
		<div className={classes.box}>
        <table className={classes.tg}>
          <thead>
            <tr>
              <th className={classes.tgFuxe}>Period</th>
              <th className={classes.tgFuxe}>1</th>
              <th className={classes.tgFuxe}>2</th>
              <th className={classes.tgFuxe}>3</th>
              <th className={classes.tgFuxe}>4</th>
              <th className={classes.tgFuxe}>5</th>
              <th className={classes.tgFuxe}>6</th>
              <th className={classes.tgFuxe}>7</th>
              <th className={classes.tgFuxe}>8</th>
              <th className={classes.tgFuxe}>9</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={classes.tgKp8h}>Monday</td>
              <td className={classes.tgKp8h}><Card /></td>
              <td className={classes.tgKp8h}><Card displayCode="CHEM F213" code="CHEMF213L" sub="ORGANIC" type="L1" /></td>
              <td className={classes.tgKp8h}><Card displayCode="CHEM F212" code="CHEMF212L" sub="INORGANIC" type="L1" /></td>
              <td className={classes.tgKp8h}><Card displayCode="HSS F334" code="HSSF334L" sub="GITA" type="L1" /></td>
              <td className={classes.tgKp8h}><Card displayCode="BITS F214" code="BITSF214L" sub="STM" type="L1" /></td>
              <td className={classes.tgKp8h}><Card displayCode="_" code="_" /></td>
              <td className={classes.tgKp8h}><Card displayCode="CHEM F213" code="CHEMF213T" sub="ORGANIC" type="T1" /></td>
              <td className={classes.tgKp8h}><Card displayCode="CHEM F214" code="CHEMF214L" sub="ORGANIC" type="L1" /></td>
              <td className={classes.tgKp8h}><Card displayCode="MATH F211" code="MATHF211L" sub="M-3" type="L6" /></td>
            </tr>
            <tr>
              <td className={classes.tgFuxe}>Tuesday</td>
              <td className={classes.tgFuxe}><Card displayCode="_" code="_" /></td>
              <td className={classes.tgFuxe}><Card displayCode="_" code="_" /></td>
              <td className={classes.tgFuxe}><Card displayCode="_" code="_" /></td>
              <td className={classes.tgFuxe}><Card displayCode="PHY F212" code="PHYF212L" sub="EMT" type="L3" /></td>
              <td className={classes.tgFuxe}><Card displayCode="CHEM F211" code="CHEMF211L" sub="PC-I" type="L1" /></td>
              <td className={classes.tgFuxe}><Card displayCode="_" code="_" /></td>
              <td className={classes.tgFuxe}><Card displayCode="_" code="_" /></td>
              <td className={classes.tgFuxe}><Card displayCode="_" code="_" /></td>
              <td className={classes.tgFuxe}><Card displayCode="MATH F211" code="MATHF211L" sub="M-3" type="T6" /></td>
            </tr>
            <tr>
              <td className={classes.tgKp8h}>Wednesday</td>
              <td className={classes.tgKp8h}><Card displayCode="_" code="_" /></td>
              <td className={classes.tgKp8h}><Card displayCode="CHEM F213" code="CHEMF213L" sub="PC-II" type="L1" /></td>
              <td className={classes.tgKp8h}><Card displayCode="CHEM F212" code="CHEMF212L" sub="OC-I" type="L1" /></td>
              <td className={classes.tgKp8h}><Card displayCode="HSS F334" code="HSSF334L" sub="Gita" type="L1" /></td>
              <td className={classes.tgKp8h}><Card displayCode="BITS F214" code="BITSF214L" sub="STM" type="L1" /></td>
              <td className={classes.tgKp8h}><Card displayCode="_" code="_" /></td>
              <td className={classes.tgKp8h}><Card displayCode="_" code="_" /></td>
              <td className={classes.tgKp8h}><Card displayCode="CHEM F214" code="CHEMF214L" sub="IC-I" type="L1" /></td>
              <td className={classes.tgKp8h}><Card displayCode="MATH F211" code="MATHF211L" sub="M-3" type="L6" /></td>
            </tr>
            <tr>
              <td className={classes.tgFuxe}>Thursday</td>
              <td className={classes.tgFuxe}><Card displayCode="CHEM F214" code="CHEMF214T" sub="IC-I" type="T1" /></td>
              <td className={classes.tgFuxe}><Card displayCode="_" code="_" /></td>
              <td className={classes.tgFuxe}><Card displayCode="_" code="_" /></td>
              <td className={classes.tgFuxe}><Card displayCode="PHY F212" code="PHYF212L" sub="EMT" type="L3" /></td>
              <td className={classes.tgFuxe}><Card displayCode="CHEM F211" code="CHEMF211L" sub="PC-I" type="L1" /></td>
              <td className={classes.tgFuxe}><Card displayCode="_" code="_" /></td>
              <td className={classes.tgFuxe}><Card displayCode="_" code="_" /></td>
              <td className={classes.tgFuxe}><Card displayCode="CHEM F211" code="CHEMF211T" sub="PC-1" type="T1" /></td>
              <td className={classes.tgFuxe}><Card displayCode="CHEM F212" code="CHEMF212T" sub="PC-2" type="T1" /></td>
            </tr>
            <tr>
              <td className={classes.tgKp8h}>Friday</td>
              <td className={classes.tgKp8h}><Card displayCode="_" code="_" /></td>
              <td className={classes.tgKp8h}><Card displayCode="CHEM F213" code="CHEMF213L" sub="PC-II" type="L1" /></td>
              <td className={classes.tgKp8h}><Card displayCode="CHEM F212" code="CHEMF212L" sub="OC-I" type="L1" /></td>
              <td className={classes.tgKp8h}><Card displayCode="HSS F334" code="HSSF334L" sub="Gita" type="L1" /></td>
              <td className={classes.tgKp8h}><Card displayCode="BITS F214" code="BITSF214L" sub="STM" type="L1" /></td>
              <td className={classes.tgKp8h}><Card displayCode="_" code="_" /></td>
              <td className={classes.tgKp8h}><Card  displayCode="_" code="_"/></td>
              <td className={classes.tgKp8h}><Card displayCode="CHEM F214" code="CHEMF214L" sub="IC-I" type="L1" /></td>
              <td className={classes.tgKp8h}><Card displayCode="MATH F211" code="MATHF211L" sub="M-3" type="L6" /></td>
            </tr>
            <tr>
              <td className={classes.tgFuxe}>Saturday</td>
              <td className={classes.tgFuxe}><Card displayCode="PHY F212" code="PHYF212T" sub="EMT" type="T3" /></td>
              <td className={classes.tgFuxe}><Card displayCode="_" code="_"  /></td>
              <td className={classes.tgFuxe}><Card displayCode="_" code="_"  /></td>
              <td className={classes.tgFuxe}><Card displayCode="PHY F212" code="PHYF212L" sub="EMT" type="L3"/></td>
              <td className={classes.tgFuxe}><Card displayCode="CHEM F211" code="CHEMF211L" sub="PC-I" type="L1"/></td>
              <td className={classes.tgFuxe}><Card displayCode="_" code="_"  /></td>
              <td className={classes.tgFuxe}><Card displayCode="_" code="_"  /></td>
              <td className={classes.tgFuxe}><Card displayCode="_" code="_"  /></td>
              <td className={classes.tgFuxe}><Card displayCode="_" code="_"  /></td>
            </tr>
          </tbody>
        </table>
    </div>
		);
	}
}

export default Table;