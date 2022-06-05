/** WIP Collection of potential states for generator */
export interface IFullPromptStateNode {
    // This actually might be better off as a bitmask to form sets cause there is an actual union on some of these
    target: 'browser' | 'cli' | 'npm' | 'universal'
    typescript: boolean
    monorepo: boolean
    // CI/CD
    buildAutomationProvider: 'azure' | 'github'
    docker: boolean
    // For Dependencies and updating docker file
    databases: string[]
    // Allow Selection/Removal of staged generated files by hand
    fineGrainedSelect: boolean
}