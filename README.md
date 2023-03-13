# Task Completion Tracker


## Composition

A task is a thing to do which impacts a community.

{
  id: <Integer>,
  name: <String>,
  community: <String>,
  risks: [<risk>],
  value: [R,I,C,E],
}


## Risks

A task has associated risks

{
  task_id: <Integer>,
  name: <String>,
  likelihood: <Float>,
  impact: <Float>,
  score: (<Float>)
}

A risk has likelihood and impact
- Likelihood is the percentage chance of the risk occuring
- Impact is the percentage chance of the risk delaying the task


## Value

A task has a certain value based on a RICE score

Value = (R * I * C) / E

Reach is the percentage of the community that is impacted by the task

Impact is the percentile reflecting how much effected community members are emhanced by the task's completion

Confidence is the percentage chance that the task can be completed on-time, on-budget, and on-spec

Effect is the percentage of development time that this task will require
