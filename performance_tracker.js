(function(performance){
    const self = performance.__proto__;
    self.trigger = () => {
        performance.start_time = performance.now();
    }
    self.track = (list_ref, track_callback = () => {}) => {
        const list = document.querySelector(list_ref);
        const options = {
            childList: true,
            attributes: true,
            characterData: true,
            subtree: true,
            attributeFilter: ['one', 'two'],
            attributeOldValue: true,
            characterDataOldValue: true
        }
            
        function callback (mutations) {
            let time_elapsed = performance.now() - performance.start_time;
            track_callback(time_elapsed);
        }
        
        if(self.observer) {
            self.observer.disconnect()
        }
        const observer = new MutationObserver(callback);
        
        observer.observe(list, options);
    }

})(performance)