import moment from 'moment'

export default {

  moment(time) {

    return moment(time).fromNow()

  },

  duration(value) {

    if (typeof value === 'undefined' || value === null) return '';

    let seconds = moment.duration(value, 'seconds').seconds().toString();

    let minutes = moment.duration(value, 'seconds').minutes().toString();

    seconds = (seconds.length === 1) ? '0' + seconds : seconds;

    minutes = (minutes.length === 1) ? '0' + minutes : minutes;

    return minutes + ':' + seconds;
  },

  renderCss(styles) {

    if (!styles.base) return false

    const style = `
      .app-base-background {
        background: ${styles.base};
        background: linear-gradient(${styles.baseBg});
      }
      .app-base-background.btn:hover, .app-base-background.btn:active {
        background-color: ${styles.baseMuted}!important;
      }
      .app-extra-background {
        background-color: ${styles.extra};
      }
      .app-extra-light-background {
        background-color: ${styles.extraLight};
      }
      .app-base-color {
        color: ${styles.base};
      }
      .app-base-color.btn:hover, .app-base-color.btn:active {
        background-color: ${styles.extraLight}!important;
        color: ${styles.baseMuted}!important;
      }
      .app-base-color-muted {
        color: ${styles.baseMuted};
      }
      .app-base-color-muted.btn:hover,.app-base-color-muted.btn:active {
        color: ${styles.baseMuted};
      }
      .app-base-color-muted.btn.enabled {
        color: #fff;
      }
      .app-extra-light-color {
        color: ${styles.extraLight}!important;
      }
      .app-font-color {
        color: ${styles.font};
      }
      .app-font-color-muted {
        color: ${styles.fontMuted};
      }

      .app-player-top-border {
        border-right: 1px solid ${styles.topBorder};
      }
      .app-player-bottom-border {
        border-right: 1px solid ${styles.bottomBorder};
      }

      .rangeslider-horizontal {
        background: ${styles.baseMuted}!important;
      }
      .rangeslider-horizontal .rangeslider__fill {
        background-color: ${styles.extraLight}!important;
      }
    `

    return style

  }

}