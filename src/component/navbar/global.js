const direction = document.documentElement.dir || 'ltr';
const left =direction=='ltr'?'left':'right';
const right=direction=='ltr'?'right':'left';
const Globals ={
    localeCode:document.documentElement.lang,
    direction:direction,
    left:left,
    marginLeft:`margin-${left}`,
    marginRight:`margin-${right}`,
    paddingLeft:`padding-${left}`,
    paddingRight:`padding-${right}`,
    right:right,
}
export default Globals