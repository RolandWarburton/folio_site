import React from 'react';
import {Link} from 'react-router-dom'
import Header from './Header'

function Articles() {
  return (
    <div className="centerCol">
      <Header />
      <h1>Articles</h1>
      <Link to="/">home</Link>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in nibh et neque pharetra dapibus sed at augue. Nulla sagittis vulputate luctus. Proin ornare sapien in ligula hendrerit porttitor. Quisque vel mauris lectus. Cras tincidunt imperdiet arcu, at lacinia tortor commodo bibendum. Phasellus ut eleifend odio, id auctor arcu. Cras et rhoncus metus, sit amet aliquam diam. Sed turpis lorem, luctus at mattis id, consectetur quis mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas malesuada erat ex, a euismod nulla viverra non. Maecenas dapibus lorem ut lectus bibendum, non luctus ante rutrum. Suspendisse eget quam vehicula, venenatis erat ut, iaculis ipsum. Quisque in odio sed magna ullamcorper semper. In a eros nec tortor hendrerit auctor a a massa. Vivamus non risus euismod, fermentum risus in, pharetra dolor. Phasellus ultricies auctor posuere. </p>
      <p>Duis odio dolor, scelerisque vitae lorem rutrum, maximus condimentum quam. Etiam leo ligula, varius eget ante ac, efficitur finibus ante. Etiam semper eros id turpis malesuada suscipit. Nullam sed dictum magna, eu commodo sem. Proin id augue nec ante placerat suscipit eget quis mauris. Nullam gravida, est quis sodales ornare, est ligula sollicitudin turpis, eget cursus purus dui ac risus. In hendrerit tristique facilisis. Donec enim erat, venenatis nec lectus sit amet, bibendum aliquet massa. Quisque tristique tempor neque, at luctus augue suscipit et. Quisque viverra leo eu convallis pulvinar. Vestibulum a accumsan tellus, quis condimentum neque. Nunc dictum arcu in velit sodales, quis lacinia nibh convallis. Curabitur nec enim leo. </p>
      <p> Vestibulum dapibus dapibus eros, sit amet tristique ipsum lobortis vitae. Proin vehicula massa mauris, nec bibendum odio tincidunt quis. Sed eget libero eget quam aliquam dictum. Quisque vel turpis vitae nulla fermentum pretium. Morbi pellentesque pretium malesuada. Ut tempor risus in velit dictum ultrices. Fusce accumsan eu nunc et commodo. Nam et tortor sit amet justo pellentesque vestibulum. Nunc eu ligula tincidunt, scelerisque purus facilisis, elementum lorem. Nullam eu bibendum sapien. Integer ultrices enim massa, sed efficitur ex viverra sed. Cras et auctor nulla. Donec efficitur consequat augue, nec lobortis dui auctor sit amet. Integer nisi lacus, consectetur ut enim in, rhoncus pulvinar diam. Quisque placerat nulla eu neque mattis blandit. Ut eu ante vitae arcu facilisis gravida at vitae diam. </p>
      <p>Duis rutrum, nisi sed sagittis convallis, nisl purus pulvinar dui, a vestibulum nulla erat nec ante. Sed elementum orci eu lectus auctor, vitae lacinia lectus posuere. Suspendisse non nibh tristique, accumsan velit et, tempor lectus. Aliquam aliquet feugiat sapien, nec dignissim lacus vulputate vel. Etiam interdum ipsum sapien, ac bibendum mauris auctor id. In sed orci vitae turpis elementum porta. Vestibulum semper, arcu et pellentesque sodales, lectus augue blandit felis, et gravida ipsum lorem quis mauris. Nullam mattis vitae ligula quis scelerisque. Nunc et ultrices arcu, a finibus nisl. Quisque sagittis faucibus lectus eu pulvinar. </p>
    </div>
  )
}

export default Articles;
