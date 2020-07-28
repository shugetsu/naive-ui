import { c, cE, cTB } from '../../../_utils/cssr'

export default c([
  ({ props }) => {
    const {
      borderRadius,
      backgroundColor
    } = props.$local
    const {
      easeInOutCubicBezier
    } = props.$base

    return cTB('avatar', {
      raw: `
        color: #FFF;
        font-size: 14px;
        display: inline-block;
        position: relative;
        overflow: hidden;
        text-align: center;
      `,
      borderRadius,
      transition: `
        background-color .3s ${easeInOutCubicBezier},
        color .3s ${easeInOutCubicBezier},
      `,
      backgroundColor
    }, [
      c('img', {
        width: '100%',
        height: '100%'
      }),
      cE('text', {
        raw: `
          white-space: nowrap;
          display: inline-block;
          position: absolute;
          left: 50%;
          top: 50%;
        `
      })
    ])
  }])