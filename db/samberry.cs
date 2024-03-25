using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;
namespace Samberry
{
    #region Meeting
    public class Meeting
    {
        #region Member Variables
        protected unknown _id;
        protected string _meeting_title;
        protected string _meeting_uid;
        protected string _created_by;
        #endregion
        #region Constructors
        public Meeting() { }
        public Meeting(string meeting_title, string meeting_uid, string created_by)
        {
            this._meeting_title=meeting_title;
            this._meeting_uid=meeting_uid;
            this._created_by=created_by;
        }
        #endregion
        #region Public Properties
        public virtual unknown Id
        {
            get {return _id;}
            set {_id=value;}
        }
        public virtual string Meeting_title
        {
            get {return _meeting_title;}
            set {_meeting_title=value;}
        }
        public virtual string Meeting_uid
        {
            get {return _meeting_uid;}
            set {_meeting_uid=value;}
        }
        public virtual string Created_by
        {
            get {return _created_by;}
            set {_created_by=value;}
        }
        #endregion
    }
    #endregion
}using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;
namespace Samberry
{
    #region User_account
    public class User_account
    {
        #region Member Variables
        protected string _id;
        protected string _user_email;
        protected string _user_password;
        protected string _user_full_name;
        protected string _user_avatar;
        #endregion
        #region Constructors
        public User_account() { }
        public User_account(string user_email, string user_password, string user_full_name, string user_avatar)
        {
            this._user_email=user_email;
            this._user_password=user_password;
            this._user_full_name=user_full_name;
            this._user_avatar=user_avatar;
        }
        #endregion
        #region Public Properties
        public virtual string Id
        {
            get {return _id;}
            set {_id=value;}
        }
        public virtual string User_email
        {
            get {return _user_email;}
            set {_user_email=value;}
        }
        public virtual string User_password
        {
            get {return _user_password;}
            set {_user_password=value;}
        }
        public virtual string User_full_name
        {
            get {return _user_full_name;}
            set {_user_full_name=value;}
        }
        public virtual string User_avatar
        {
            get {return _user_avatar;}
            set {_user_avatar=value;}
        }
        #endregion
    }
    #endregion
}