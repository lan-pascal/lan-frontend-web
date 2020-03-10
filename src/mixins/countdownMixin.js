export default {
    mounted() {
        
        this.interval = window.setInterval(() => {
        this.now = Math.trunc(new Date().getTime() / 1000);
        }, 1000);
    },
    beforeDestroy: function () {
        clearInterval(this.interval)
    },
    data() {
        return {
            now: Math.trunc(new Date().getTime() / 1000)
        };
    },
    props: {
        deadline: {
            type: String,
            required: true,
        }
    },
    computed: {
        dateInMS() {
            return Math.trunc(Date.parse(this.deadline) / 1000);
        },
        seconds() {
            return (this.dateInMS - this.now) % 60;
        },
        minutes() {
            return Math.trunc((this.dateInMS - this.now) / 60) % 60;
        },
        hours() {
            return Math.trunc((this.dateInMS - this.now) / 60 / 60) % 24;
        },
        days() {
            return Math.trunc((this.dateInMS - this.now) / 60 / 60 / 24);
        },
        times() {
            return [this.days, this.hours, this.minutes, this.seconds]
        }
    },
    filters: {
        two_digits: function(value) {
            if (value < 0) return "00";
            if (value.toString().length <= 1) return "0" + value;
            
            return value;
        }
    }
};