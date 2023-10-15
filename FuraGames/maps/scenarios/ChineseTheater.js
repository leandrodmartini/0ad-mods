Trigger.prototype.StartCutscene = function(data)
{
    var cmpCinemaManager = Engine.QueryInterface(SYSTEM_ENTITY, IID_CinemaManager);
    // We should work only with valid components
    if (!cmpCinemaManager)
        return;
    // Add a cinema path with "IntroWater" name to the queue
    cmpCinemaManager.AddCinemaPathToQueue("fullpath");
    // Start playing the queue
    cmpCinemaManager.Play();
};

Trigger.prototype.StartEgiptscene = function(data)
{
    var cmpCinemaManager = Engine.QueryInterface(SYSTEM_ENTITY, IID_CinemaManager);
    // We should work only with valid components
    if (!cmpCinemaManager)
        return;
    // Add a cinema path with "IntroWater" name to the queue
    cmpCinemaManager.AddCinemaPathToQueue("egipt");
    // Start playing the queue
    cmpCinemaManager.Play();
};

Trigger.prototype.ElevateSun = function(data)
{
    var viewInterface = Engine.QueryInterface(SYSTEM_ENTITY, IID_View);
    
    if (!viewInterface)
        return; 
  
    viewInterface.SetSunElevation(data.elevation);
};

var cmpTrigger = Engine.QueryInterface(SYSTEM_ENTITY, IID_Trigger);
cmpTrigger.DoAfterDelay(60000, "ElevateSun", {"elevation": 10});
cmpTrigger.DoAfterDelay(120000, "ElevateSun", {"elevation": 20});
cmpTrigger.DoAfterDelay(180000, "ElevateSun", {"elevation": 30});
cmpTrigger.DoAfterDelay(240000, "ElevateSun", {"elevation": 40});
cmpTrigger.DoAfterDelay(360000, "ElevateSun", {"elevation": 50});
cmpTrigger.DoAfterDelay(420000, "ElevateSun", {"elevation": 60});
cmpTrigger.DoAfterDelay(300000, "StartEgiptscene", {}); // Delay is set in milliseconds
cmpTrigger.DoAfterDelay(1000000, "StartCutscene", {}); // Delay is set in milliseconds
cmpTrigger.DoAfterDelay(2000000, "StartCutscene", {});
cmpTrigger.DoAfterDelay(3000000, "StartEgiptscene", {});
cmpTrigger.DoAfterDelay(4000000, "StartCutscene", {});
cmpTrigger.DoAfterDelay(5000000, "StartCutscene", {});
cmpTrigger.DoAfterDelay(10000000, "StartCutscene", {});
cmpTrigger.DoAfterDelay(30000000, "StartEgiptscene", {});
// cmpTrigger.RegisterTrigger("OnCinemaPathEnded", "ShowEnemy", { "enabled": true });

