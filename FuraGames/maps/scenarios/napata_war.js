
Trigger.prototype.StartCutscene = function(data)
{
    var cmpCinemaManager = Engine.QueryInterface(SYSTEM_ENTITY, IID_CinemaManager);
    // We should work only with valid components
    if (!cmpCinemaManager)
        return;
    // Add a cinema path with "IntroWater" name to the queue
    cmpCinemaManager.AddCinemaPathToQueue("Intro");
    // Start playing the queue
    cmpCinemaManager.Play();
};



var data = {"enabled": true};
var cmpTrigger = Engine.QueryInterface(SYSTEM_ENTITY, IID_Trigger);
cmpTrigger.DoAfterDelay(100, "StartCutscene", {}); // Delay is set in milliseconds
// cmpTrigger.RegisterTrigger("OnCinemaQueueEnded", "FarmerGather", {});
// cmpTrigger.DoAfterDelay(120000, "FarmerGather", {});
// cmpTrigger.DoAfterDelay(300000, "ShowEnemy", {}); // Delay is set in milliseconds
// cmpTrigger.RegisterTrigger("OnCinemaPathEnded", "ShowEnemy", { "enabled": true });

