const profileStateArray=document.querySelectorAll('.profile__state')
const profileSectionArray=document.querySelectorAll('.profile__section')
const filterItemArray=document.querySelectorAll('.filter__item')
const profileBox=document.querySelector('.profile__box')
const editBox=document.querySelector('.edit__box')
const editProfile=document.querySelector('.edit__profile')
const cancelBtn=document.querySelector('.cancel__btn')
const submitBtn=document.querySelector('.submit__btn')
const calendarWrapper=document.querySelector('.calendar__wrapper')
const calendarBox=document.querySelector('.calendar__box')
const cancelModal=document.querySelector('.cancel__modal')
const cancelOrder=document.querySelector('.cancel__order')
const cancelModalBtn=document.querySelector('.cancel__modal--btn')
const backCancelBtn=document.querySelector('.back__cancel--btn')
const closeCancelModalBtn=document.querySelector('.close__cancel--modal')
const dayCalendarArray=document.querySelectorAll('.day__calendar')
profileStateArray.forEach(state=>{
    state.addEventListener('click',()=>{
        profileStateArray.forEach(item=>{
            item.classList.remove('profile__state--active')
        })
        profileSectionArray.forEach(item=>{
            item.classList.remove('profile__section--active')
        })
    state.classList.add('profile__state--active')
    document.getElementById(state.dataset.id).classList.add('profile__section--active')
    })
})
editProfile.addEventListener('click',()=>{
    profileBox.classList.remove('profile__box--active')
    editBox.classList.add('edit__box--active')
})
submitBtn.addEventListener('click',(e)=>{
e.preventDefault()
    profileBox.classList.add('profile__box--active')
    editBox.classList.remove('edit__box--active')
})
cancelBtn.addEventListener('click',(e)=>{
e.preventDefault()
    profileBox.classList.add('profile__box--active')
    editBox.classList.remove('edit__box--active')
})
dayCalendarArray.forEach(item=>{
    item.addEventListener('click',(e)=>{
        e.preventDefault()
        if(item.classList.contains('day__disable')){
            return
        }else{
            dayCalendarArray.forEach(day=>{
                day.classList.remove('day__active')
            })
        }
        item.classList.add('day__active')
    })
})
calendarWrapper.addEventListener('click',()=>{
    calendarBox.classList.add('calendar__box--active')
    overlay.classList.add('overlay__subMenu--active')
})
overlay.addEventListener('click',(e)=>{
    e.preventDefault()
    if(e.target.parentElement.tagName=='BODY'){
        overlay.classList.remove('overlay__subMenu--active')
        calendarBox.classList.remove('calendar__box--active')
        closeCancelModal()
    }
})
filterItemArray.forEach(item=>{
    item.addEventListener('click',()=>{
        filterItemArray.forEach(btn=>{
            btn.classList.remove('filter__item--active')
        })
        item.classList.add('filter__item--active')
    })
})
function closeCancelModal(){
    overlay.classList.remove('overlay__active')
    cancelModal.classList.remove('cancel__modal--active')
}
function openCancelModal(){
    overlay.classList.add('overlay__active')
    cancelModal.classList.add('cancel__modal--active')
}
cancelModalBtn.addEventListener('click',()=>{
    closeCancelModal()
})
backCancelBtn.addEventListener('click',()=>{
    closeCancelModal()
})
closeCancelModalBtn.addEventListener('click',()=>{
    closeCancelModal()
})
cancelOrder.addEventListener('click',()=>{
    openCancelModal()
})