# WYLDFYRES 2.0
**Topic:**  Where we take learnings from WyldFyrez (Project 1) and heat it up a level.

**Team and Roles:** 
- Michael _Leaflet and maps_
- Erin _Python, SQL_
- Drew _Python, Machine Learning_
- Jess _HTML, CSS_

**Data Sources:** [U.S. Forest Service (Fire Data)](https://enterprisecontent-usfs.opendata.arcgis.com/datasets/e4d020cb51304d5194860d4464da7ba7_0)
[Beef2Live (State Acreage)](https://beef2live.com/story-ranking-states-total-acres-0-108930)
[Wilderness Connect (Wilderness Acreage)](https://www.wilderness.net/NWPS/chartResults?chartType=AcreageByStateMost)
[National Interagency Fire Center (Suppression Costs)](https://www.nifc.gov/fireInfo/fireInfo_documents/SuppCosts.pdf)
[National Centers for Environmental Information (Weather Data)](https://www.ncdc.noaa.gov/cag/statewide/time-series/9/tmin/all/1/1992-2005?base_prd=true&begbaseyear=2005&endbaseyear=2005&trend=true&trend_base=10&begtrendyear=2005&endtrendyear=2015)


**Repository:** [WyldFyrez-2.0](https://github.com/meharperjr/WyldFyrez-2.0)

**About:**
Based on findings from WyldFyrez (Project 1), California and Georgia were found to have the highest number of fires by state. To better understand, we map the causes of the fires and their locations in each state for visual learning. After this, we use past data and supplemental data, such as average, maximum and minimum monthly temperatures, we attempt to predict two features of fires: cause and size category.

Broken down into three segments, we explore:
1. Fire Causes by State using map visualizations
2. Fire Expenses by Year
3. Predictions Using Machine Learning

**Process:**
We used the same data sources from WyldFyrez and collected suppression firefighting costs and supplemental weather data for the machine learning portion. Once all gathered, we cleaned it using Python and Pandas.

Next, we created interactive maps and charts using JavaScript, Chartjs, Node.js, D3, and Leaflet (for maps).

For the machine learning, we attempted to find relationships and their predictability using features of our dataset. Two of the features being predicted include the cause of the fire and the size category of the fires. Our hypothesis was that the cause of the fire would likely not have a good prediction rate due to fires not strongly linked to many of the features of wildfires. However, we believed the fire size category would likely have a higher prediction accuracy rate as weather will likely strongly correlate with the size of a fire.


**Conclusion:**
Our visualizations were direct and straightforward in providing a visual explanation of the fires, while the federal firefighting suppression costs were educational and thought-provoking. We found it interesting that costs increased drastically in the last few years, despite number of fires and acres burned not fluctuating too far from its historical trends. 

From the machine learning, *****************************************.