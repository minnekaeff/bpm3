namespace Terrasoft.Configuration.ICLTestConfigurationService
{
    using System;
    using System.ServiceModel;
    using System.ServiceModel.Web;
    using System.ServiceModel.Activation;
    using Terrasoft.Core;
    using Terrasoft.Web.Common;
    using Terrasoft.Core.Entities;
    using System.IO;
    using System.Web;
    using Newtonsoft.Json;

    [ServiceContract]
    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
    public class ICLTestConfigurationService : BaseService
    {
        // ������ �� ��������� UserConnection, ��������� ��� ��������� � ���� ������.
        private SystemUserConnection _systemUserConnection;
        private SystemUserConnection SystemUserConnection
        {
            get
            {
                return _systemUserConnection ?? (_systemUserConnection = (SystemUserConnection)AppConnection.SystemUserConnection);
            }
        }

        [OperationContract]
        [WebInvoke(Method = "POST", RequestFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Wrapped,
            ResponseFormat = WebMessageFormat.Json)]
        public int GetContactCount()
        {
            // ��������� �� ���������.
            var result = "";
            // ��������� EntitySchemaQuery, ������������ � ������� Contact ���� ������.
            var esq = new EntitySchemaQuery(SystemUserConnection.EntitySchemaManager, "Contact");
            // ���������� ������� � ������.
            var colId = esq.AddColumn("Id");
            var colName = esq.AddColumn("Name");
            // ��������� ���������� �������.
            var entities = esq.GetEntityCollection(SystemUserConnection);
            // ���������� ���������.
            return entities.Count;
        }
    }
}