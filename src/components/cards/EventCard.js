import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function EventCard() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <div className="">
    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1bh-content"
      id="panel1bh-header"
    >
      <Typography sx={{ width: '33%', flexShrink: 0 }}>
        General settings
      </Typography>
      <span className="flex gap-8">
      <button onClick >✓</button>
      <button onClick >X</button>

      </span>
    </AccordionSummary>
    <AccordionDetails>
  jbjkb
    </AccordionDetails>
  </Accordion>
  <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel2bh-content"
      id="panel2bh-header"
    >
      <Typography sx={{ width: '33%', flexShrink: 0 }}>Users</Typography>
      <span className="flex gap-8">
      <button onClick >✓</button>
      <button onClick >X</button>

      </span>
    </AccordionSummary>
    <AccordionDetails>
   jkbkbks
    </AccordionDetails>
  </Accordion>
  <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel3bh-content"
      id="panel3bh-header"
    >
      <Typography sx={{ width: '33%', flexShrink: 0 }}>
        Advanced settings
      </Typography>
      <span className="flex gap-8">
      <button onClick >✓</button>
      <button onClick >X</button>

      </span>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
        amet egestas eros, vitae egestas augue. Duis vel est augue.
      </Typography>
    </AccordionDetails>
  </Accordion>
  <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel4bh-content"
      id="panel4bh-header"
    >
      <Typography sx={{ width: '33%', flexShrink: 0 }}>Personal data</Typography>
    <span className="flex gap-8">
      <button onClick >✓</button>
      <button onClick >X</button>

      </span>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
        amet egestas eros, vitae egestas augue. Duis vel est augue.
      </Typography>
    </AccordionDetails>
   
  </Accordion>
  </div>
  )
}
