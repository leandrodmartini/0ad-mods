Trigger.prototype.StartCutscene = function(data)
{
    var cmpCinemaManager = Engine.QueryInterface(SYSTEM_ENTITY, IID_CinemaManager);
    warn("Iniciando história... ");
    // We should work only with valid components
    if (!cmpCinemaManager)
        return;
    // Add a cinema path with "IntroWater" name to the queue
    cmpCinemaManager.AddCinemaPathToQueue("IntroWater");
    // Start playing the queue
    cmpCinemaManager.Play();
};

var cmpTrigger = Engine.QueryInterface(SYSTEM_ENTITY, IID_Trigger);
cmpTrigger.DoAfterDelay(5000, "StartCutscene", {}); // Delay is set in milliseconds
