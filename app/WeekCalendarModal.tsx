"use client"

export const WeekCalendarModal = () => {
    return (
      <div className="grid gap-[10px] m-8 grid-cols-[auto,1fr]">
        {/* <div className="grid grid-rows-5 h-[60px]">
          <div className="h-[60px]"></div>
          <div className="time-marker">9 AM</div>
          <div className="time-marker">10 AM</div>
          <div className="time-marker">11 AM</div>
          <div className="time-marker">12 PM</div>
          <div className="time-marker">1 PM</div>
          <div className="time-marker">2 PM</div>
          <div className="time-marker">3 PM</div>
          <div className="time-marker">4 PM</div>
          <div className="time-marker">5 PM</div>
          <div className="time-marker">6 PM</div>
        </div> */}
        <div className="grid grid-cols-2 gap-[5px] sm:grid-cols-auto-fit sm:grid-cols-minmax-[150px]">
          <div className="day mon">
            <div className="h-[60px]">
              <p className="text-[3rem] font-[600px] inline">9</p>
              <p className="inline text-[3rem] font-[100px]">Mon</p>
            </div>
            <div className="grid rounded-[5px] bg-[#fff1f8] grid-rows-10 h-[60px]">
              <div className="rounded-[5px] padding-[0.5rem] bg-white border border-[#f2d3d8] row-start-6 row-end-9 securities">
                <p className="font-[600px] mb-[0.25rem]">
                  Securities Regulation
                </p>
                <p className="time">2 PM - 5 PM</p>
              </div>
            </div>
          </div>
          <div className="day tues">
            <div className="h-[60px]">
              <p className="text-[3rem] font-[600px] inline">12</p>
              <p className="inline text-[3rem] font-[100px]">Tues</p>
            </div>
            <div className="grid rounded-[5px] bg-[#fff1f8] grid-rows-10 h-[60px]">
              <div className="rounded-[5px] padding-[0.5rem] bg-white border border-[#f2d3d8] row-start-6 row-end-4 corp-fi">
                <p className="font-[600px] mb-[0.25rem]">Corporate Finance</p>
                <p className="time">10 AM - 12 PM</p>
              </div>
              <div className="rounded-[5px] padding-[0.5rem] bg-white border border-[#f2d3d8] row-start-5 row-end-4 ent-law">
                <p className="font-[600px] mb-[0.25rem]">Entertainment Law</p>
                <p className="time">1PM - 4PM</p>
              </div>
            </div>
          </div>
          <div className="day wed">
            <div className="h-[60px]">
              <p className="text-[3rem] font-[600px] inline">11</p>
              <p className="inline text-[3rem] font-[100px]">Wed</p>
            </div>
            <div className="grid rounded-[5px] bg-[#fff1f8] grid-rows-10 h-[60px]">
              <div className="rounded-[5px] padding-[0.5rem]  border border-[#f2d3d8] row-start-4 row-end-9 bg-[#e2f8ff]">
                <p className="font-[600px] mb-[0.25rem]">Writing Seminar</p>
                <p className="time">11 AM - 12 PM</p>
              </div>
              <div className="rounded-[5px] padding-[0.5rem] border border-[#f2d3d8] row-start-6 row-end-9 bg-[#d1ffe6]">
                <p className="font-[600px] mb-[0.25rem]">
                  Securities Regulation
                </p>
                <p className="time">2 PM - 5 PM</p>
              </div>
            </div>
          </div>
          <div className="day thurs">
            <div className="h-[60px]">
              <p className="text-[3rem] font-[600px] inline">12</p>
              <p className="inline text-[3rem] font-[100px]">Thurs</p>
            </div>
            <div className="grid rounded-[5px] bg-[#fff1f8] grid-rows-10 h-[60px]">
              <div className="rounded-[5px] padding-[0.5rem] border border-[#f2d3d8] row-start-2 row-end-4 bg-[#ffd6d1]">
                <p className="font-[600px] mb-[0.25rem]">Corporate Finance</p>
                <p className="time">10 AM - 12 PM</p>
              </div>
              <div className="rounded-[5px] padding-[0.5rem] border border-[#f2d3d8] row-start-5 row-end-4 bg-[#fafaa3]">
                <p className="font-[600px] mb-[0.25rem]">Entertainment Law</p>
                <p className="time">1PM - 4PM</p>
              </div>
            </div>
          </div>
          <div className="day fri">
            <div className="h-[60px]">
              <p className="text-[3rem] font-[600px] inline">13</p>
              <p className="inline text-[3rem] font-[100px]">Fri</p>
            </div>
            <div className="grid rounded-[5px] bg-[#fff1f8] grid-rows-10 h-[60px]"></div>
          </div>
        </div>
      </div>
    )
 }