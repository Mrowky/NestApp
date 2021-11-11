using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class AddNoticeDTO
    {
        [Required]
        public string RouteName {get; set;}
        public string RockName {get; set;}
        public string RegionName {get; set;}
        public string NoticeDescription {get; set;}
        
    }
}