import React from 'react'
import "./Timeline.scss"

function Timeline() {
    return (
        <>
            <div id="content">
                <h1>Our History</h1>

                <ul class="timeline">
                    <li class="event" data-date="1967">
                        <p>Originally known as <strong>Carleton University Preschool</strong>, we first opened within the Department of Psychology at Carleton University. At that time, we were designed as a research laboratory for scholars in child psychology. Our mandate was to facilitate and encourage research in child development and to provide the community-at-large with a model preschool.</p>
                    </li>
                    <li class="event" data-date="1982">
                        <p>We moved to <strong>Lady Evelyn Alternative School</strong> and began operating autonomously as <strong>Carleton Preschool</strong>. This relocation introduced a "seamless day" for Lady Evelyn's kindergarten and school-aged children. Children from other schools in the community also attended the program, as they do today.</p>
                    </li>
                    <li class="event" data-date="1999">
                        <p>In 1999, <strong>Carleton Preschool</strong> underwent a program name change and now operates under the name of <strong>Rainbow Kidschool</strong>. Carleton Preschool holds the licence for Rainbow Kidschool.</p>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Timeline
