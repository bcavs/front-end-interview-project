// Common breakpoints for media queries
export const breakpoints = {
    break_xs: "0px",
    break_sm: "576px",
    break_md: "768px",
    break_lg: "992px",
    break_xl: "1200px",
    break_xxl: "1400px",
}

// Helper variables for writing media queries in styled components
/** Ex:
 *  @media(${queries.min_break_lg}){
 *      ...styles
 *  }
 */

export const queries = {
    min_break_xs: "min-width: 0px",
    min_break_sm: "min-width: 576px",
    min_break_md: "min-width: 768px",
    min_break_lg: "min-width: 992px",
    min_break_xl: "min-width: 1200px",
    min_break_xxl: "min-width: 1400px",

    // Max breakpoints are 1px smaller than min breakpoints so styles don't break when at the exact px 
    max_break_sm: "max-width: 575px",
    max_break_md: "max-width: 767px",
    max_break_lg: "max-width: 991px",
    max_break_xl: "max-width: 1199px",
    max_break_xxl: "max-width: 1399px",
}