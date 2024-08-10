import {XAxis, YAxis, CartesianGrid, Tooltip ,Area,AreaChart, ResponsiveContainer } from 'recharts'


function Chart() {



  const data = [
    { month: 'Jan', income: 40000, outcome: 24000 },
    { month: 'Feb', income: 30000, outcome: 13980 },
    { month: 'Mar', income: 20000, outcome: 9800 },
    { month: 'Apr', income: 27800, outcome: 39080 },
    { month: 'May', income: 60000, outcome: 32000 },
    { month: 'Jun', income: 50000, outcome: 21000 },
    { month: 'Jul', income: 45000, outcome: 15000 },
    { month: 'Aug', income: 47000, outcome: 16000 },
    { month: 'Sep', income: 40000, outcome: 24000 },
    { month: 'Oct', income: 35000, outcome: 22000 },
    { month: 'Nov', income: 30000, outcome: 19000 },
    { month: 'Dec', income: 38000, outcome: 24000 },
  ];



  return (
  <>
  <div class="flex justify-center sm:justify-end items-center gap-x-4 mb-3 sm:mb-6 ">
    <div class="inline-flex items-center">
      <span class="size-2.5 inline-block bg-blue-600 rounded-sm me-2"></span>
      <span class="text-[13px] text-gray-600">Income</span>
    </div>
    <div class="inline-flex items-center">
      <span class="size-2.5 inline-block bg-purple-600 rounded-sm me-2"></span>
      <span class="text-[13px] text-gray-600">Outcome</span>
    </div>
  </div>
  <ResponsiveContainer width="100%" height={500}>
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 50, bottom: 20 }}>
          <defs>
            <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorOutcome" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="month" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area type="monotone" dataKey="income" stroke="#8884d8" fillOpacity={1} fill="url(#colorIncome)" />
          <Area type="monotone" dataKey="outcome" stroke="#82ca9d" fillOpacity={1} fill="url(#colorOutcome)" />
        </AreaChart>
  </ResponsiveContainer>
  </>
  )
}

export default Chart