import React from 'react'
import PropTypes from 'prop-types'
import SimpleBlockContent from '../SimpleBlockContent'
import styles from './TextSection.module.css'
import TeamMember from '../TeamMember'

function TeamMemberSection(props) {
  const {heading, label, text, teamMembers} = props

  return (
    <div className={` ${styles.gradient} ${styles.root}`}>
      <section className={'container p-12 md:px-4 py-12 md:max-w-5xl mx-auto text-center'}>
        <div className="text-sm uppercase text-cyan-800 font-bold">{label}</div>
        <h2 className="text-2xl md:text-4xl md:max-w-2xl mx-auto font-bold pb-8">{heading}</h2>
        {text && <SimpleBlockContent blocks={text} />}
        {teamMembers && (
          <div className="mt-8 flex flex-col space-y-16 text-left  ">
            {teamMembers.map((teamMember) => (
              <TeamMember {...teamMember} key={teamMember._key} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}

TeamMemberSection.propTypes = {
  heading: PropTypes.string,
  label: PropTypes.string,
  text: PropTypes.arrayOf(PropTypes.object),
  teamMembers: PropTypes.arrayOf(PropTypes.object),
}

export default TeamMemberSection
