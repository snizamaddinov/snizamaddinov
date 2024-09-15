export function getSectionList(){
    return ['experience', 'projects'];
}

export function getSectionElementClassList(section){
    const sectionElementClassList = {
        'experience': ['mb-16', 'lg:py-6', 'scroll-mt-24', 'md:mb-24', 'lg:mb-36', 'lg:scroll-mt-24'],
        'projects': ['mb-16', 'lg:py-6', 'scroll-mt-24', 'md:mb-24', 'lg:mb-36', 'lg:scroll-mt-24']
    }

    return sectionElementClassList[section];
}

export function getSectionTitleElement(title){
    const sectionTitleTemplate = `
    <div class="sticky top-0 z-20 -mx-6 mb-4 w-screen px-5 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 class="text-sm font-bold uppercase tracking-widest lg:sr-only">
        ${title}
        </h2>
    </div>
    `;
    const sectionTitleElement = document.createElement('template');
    sectionTitleElement.innerHTML = sectionTitleTemplate.trim();

    return sectionTitleElement.content.firstChild;
}

export function getFormattedDateFromDateRange(dateRange){
    const startDate = new Date(dateRange.start);
    const startMonth = startDate.toLocaleString('default', { month: 'short' });
    const startYear = startDate.getFullYear();
    
    if (!dateRange.end) return `${startMonth} ${startYear} - Present`;

    const endDate = new Date(dateRange.end);
    const endMonth = endDate.toLocaleString('default', { month: 'short' });
    const endYear = endDate.getFullYear();
    return `${startMonth} ${startYear} - ${endMonth} ${endYear}`;
}